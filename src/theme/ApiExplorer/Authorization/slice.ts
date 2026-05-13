import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createStorage, hashArray } from "@theme/ApiExplorer/storage-utils";
import type {
  SecurityRequirementObject,
  SecuritySchemeObject,
} from "docusaurus-plugin-openapi-docs/src/openapi/types";
/* eslint-disable import/no-extraneous-dependencies*/
import { ThemeConfig } from "docusaurus-theme-openapi-docs/src/types";

import { getAuthDataKeys } from "./auth-types";

const DEMO_KEY =
  "txc_live_3dc60c18580d20075706a1b45084bff6dd969d8fcd49cb42b5e7b5b39a65739f";

export function createAuth({
  security,
  securitySchemes,
  options: opts,
}: {
  security?: SecurityRequirementObject[];
  securitySchemes?: {
    [key: string]: SecuritySchemeObject;
  };
  options?: ThemeConfig["api"];
}): AuthState {
  const storage = createStorage(opts?.authPersistence ?? "sessionStorage");

  let data: AuthState["data"] = {};
  let options: AuthState["options"] = {};

  for (const option of security ?? []) {
    const id = Object.keys(option).join(" and ");
    for (const [schemeID, scopes] of Object.entries(option)) {
      const scheme = securitySchemes?.[schemeID];
      if (scheme) {
        if (options[id] === undefined) {
          options[id] = [];
        }
        const dataKeys = getAuthDataKeys(scheme);
        for (const key of dataKeys) {
          if (data[schemeID] === undefined) {
            data[schemeID] = {};
          }

          let persisted = undefined;
          try {
            persisted = JSON.parse(storage.getItem(schemeID) ?? "")[key];
          } catch {}

          // Inject demo key as default if nothing persisted
          data[schemeID][key] =
            persisted ??
            (schemeID === "api-key" && key === "token" ? DEMO_KEY : undefined);
        }
        options[id].push({
          ...scheme,
          key: schemeID,
          scopes,
        });
      }
    }
  }

  let persisted = undefined;
  try {
    persisted = storage.getItem(hashArray(Object.keys(options))) ?? undefined;
  } catch {}

  return {
    data,
    options,
    selected: persisted ?? Object.keys(options)[0],
  };
}

export type Scheme = {
  key: string;
  scopes: string[];
} & SecuritySchemeObject;

export interface AuthState {
  data: {
    [scheme: string]: {
      [key: string]: string | undefined;
    };
  };
  options: {
    [key: string]: Scheme[];
  };
  selected?: string;
}

const initialState: AuthState = {} as any;

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<{ scheme: string; key: string; value?: string }>,
    ) => {
      const { scheme, key, value } = action.payload;
      state.data[scheme][key] = value;
    },
    setSelectedAuth: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { setAuthData, setSelectedAuth } = slice.actions;

export default slice.reducer;
