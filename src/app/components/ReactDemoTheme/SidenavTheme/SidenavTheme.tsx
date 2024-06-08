import { ThemeProvider } from "@mui/material";
import useSettings from "../../../hooks/useSettings";

export default function SidenavTheme({ children }: any) {
  const { settings } = useSettings();
  const sidenavTheme =
    settings.themes[settings.layout1Settings.rightSidebar.theme];

  return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
}
