import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Scrollbar from "react-perfect-scrollbar";

import { ReactDemoVerticalNav } from "../components";
import useSettings from "../hooks/useSettings";
import { navigations } from "../navigations";

// STYLED COMPONENTS
const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative",
}));

const SideNavMobile = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  width: "100vw",
  background: "rgba(0, 0, 0, 0.54)",
  [theme.breakpoints.up("lg")]: { display: "none" },
}));

export default function Sidenav({ children }: any) {
  const { settings, updateSettings } = useSettings();

  const updateSidebarMode = (sidebarSettings: any) => {
    let activeLayoutSettingsName = settings.activeLayout + "Settings";
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        rightSidebar: {
          ...activeLayoutSettings.rightSidebar,
          ...sidebarSettings,
        },
      },
    });
  };

  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}
        <ReactDemoVerticalNav items={navigations} />
      </StyledScrollBar>

      <SideNavMobile onClick={() => updateSidebarMode({ mode: "close" })} />
    </Fragment>
  );
}
