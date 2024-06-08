import { ThemeProvider } from "@mui/material";

export default function ChatBoxTheme({ theme, children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
