import { lazy } from "react";

export { default as ChatBoxTheme } from "./Layout1/chatBoxTheme";

export const MatxLayouts = { layout1: lazy(() => import("./Layout1/Layout1")) };
