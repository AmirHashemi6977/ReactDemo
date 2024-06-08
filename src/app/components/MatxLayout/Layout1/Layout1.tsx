import { useEffect, useRef, memo } from "react";
import {
  ThemeProvider,
  useMediaQuery,
  Box,
  styled,
  useTheme,
} from "@mui/material";
import Scrollbar from "react-perfect-scrollbar";
import { Outlet } from "react-router-dom";

import useSettings from "../../../hooks/useSettings";

import Layout1Topbar from "./Layout1Topbar";
import Layout1Sidenav from "./Layout1Sidenav";

import { Chatbox, ReactDemoSuspense } from "../../../components";
import SidenavTheme from "../../../components/ReactDemoTheme/SidenavTheme/SidenavTheme";

import { sidenavCompactWidth, sideNavWidth } from "../../../utils/constant";

interface ILayoutContainer {
  open: boolean;
}

// STYLED COMPONENTS
const Layout1Root = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
  height: "100%",
  position: "relative",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
}));

const LayoutContainer = styled(Box)<ILayoutContainer>(
  ({ width, open }: any) => ({
    height: "100vh",
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    verticalAlign: "top",
    marginLeft: open ? 50 : 0,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
  })
);

const Layout1 = () => {
  const { settings, updateSettings } = useSettings();
  const { layout1Settings, chatBoxTheme } = settings;
  const topbarTheme = settings.themes[layout1Settings.topbar.theme];
  const {
    rightSidebar: { mode: sidenavMode, show: showSidenav },
  } = layout1Settings;

  const getSidenavWidth = () => {
    switch (sidenavMode) {
      case "full":
        return sideNavWidth;

      case "compact":
        return sidenavCompactWidth;

      default:
        return "0px";
    }
  };

  const sidenavWidth = getSidenavWidth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const ref = useRef({ isMdScreen, settings });
  const layoutClasses = `theme-${theme.palette.tonalOffset}`;

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.layout1Settings.rightSidebar.mode;
    if (settings.layout1Settings.rightSidebar.show) {
      let mode = isMdScreen ? "close" : sidebarMode;
      updateSettings({ layout1Settings: { rightSidebar: { mode } } });
    }
  }, [isMdScreen]);

  return (
    <Layout1Root className={layoutClasses}>
      {showSidenav && sidenavMode !== "close" && (
        <SidenavTheme>
          <Layout1Sidenav />
        </SidenavTheme>
      )}

      <LayoutContainer width={sidenavWidth} open={chatBoxTheme.open}>
        {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar />
          </ThemeProvider>
        )}

        {settings.perfectScrollbar && (
          <StyledScrollBar>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}
            <Box flexGrow={1} position="relative">
              <ReactDemoSuspense>
                <Outlet />
              </ReactDemoSuspense>
            </Box>
          </StyledScrollBar>
        )}

        {!settings.perfectScrollbar && (
          <ContentBox>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}

            <Box flexGrow={1} position="relative">
              <ReactDemoSuspense>
                <Outlet />
              </ReactDemoSuspense>
            </Box>
          </ContentBox>
        )}
      </LayoutContainer>

      {settings.chatBoxTheme.show && <Chatbox />}
    </Layout1Root>
  );
};

export default memo(Layout1);
