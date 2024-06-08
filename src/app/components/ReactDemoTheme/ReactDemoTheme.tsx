import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import useSettings from "../../hooks/useSettings";

const ReactDemoTheme = ({ children }: any) => {
  const { settings } = useSettings();

  let activeTheme = createTheme({
    ...settings.themes[settings.activeTheme],
    typography: {
      fontFamily: `"Vazirmatn"`,
    },
  });

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ReactDemoTheme;
