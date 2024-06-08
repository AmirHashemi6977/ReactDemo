import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { ReactDemoTheme } from "./components";
// ALL CONTEXTS
// import { AuthProvider } from "./contexts/Auth0Context";
// import { AuthProvider } from "./contexts/JWTAuthContext";
import { AuthProvider } from "./contexts/JWTAuthContext";
import SettingsProvider from "./contexts/SettingsProvider";

// ROUTES
import routes from "./routes";
// FAKE SERVER
import "../fake-db";

export default function App() {
  const content = useRoutes(routes);

  document.dir = "rtl";

  return (
    <SettingsProvider>
      <AuthProvider>
        <ReactDemoTheme>
          <CssBaseline />
          {content}
        </ReactDemoTheme>
      </AuthProvider>
    </SettingsProvider>
  );
}
