import { createTheme } from "@mui/material";
import { forEach, merge } from "lodash";
import { themeColors } from "./themeColors";
import themeOptions from "./themeOptions";

function createReactDemoThemes() {
  let themes: { [key: string]: any } = {};

  forEach(themeColors, (value: any, key) => {
    themes[key] = createTheme(merge({}, themeOptions, value));
  });

  return themes;
}

export const themes = createReactDemoThemes();
