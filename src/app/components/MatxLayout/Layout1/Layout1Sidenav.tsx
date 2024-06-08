import { memo } from "react";
import { Hidden, Switch, Box, styled, useTheme } from "@mui/material";

import useSettings from "../../../hooks/useSettings";

import Brand from "../../../components/Brand";
import Sidenav from "../../../components/Sidenav";
import { themeShadows } from "../../../components/ReactDemoTheme/themeColors";

import { convertHexToRGB } from "../../../utils/utils";
import {
  sidenavCompactWidth,
  sidenavMobileWidth,
  sideNavWidth,
} from "../../../utils/constant";
import { sideNavColor } from "../../../utils/colorPalette";

const NavListBox = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

interface ISidebarNavRoot {
  image: string;
  bg: string;
}
const Layout1Sidenav = () => {
  // STYLED COMPONENTS
  const SidebarNavRoot = styled(Box)<ISidebarNavRoot>(
    ({ theme, width, bg, image }: any) => ({
      position: "relative",
      top: 0,
      left: 0,
      height: "100vh",
      width: width,
      boxShadow: themeShadows[8],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundSize: "cover",
      zIndex: 111,
      overflow: "hidden",
      color: theme.palette.text.primary,
      transition: "all 250ms ease-in-out",
      backgroundImage: `linear-gradient(to bottom, rgba(${bg}, 0.96), rgba(${bg}, 0.96)), url(${image})`,
      "&:hover": {
        width: getSidenavWidth,
        "& .sidenavHoverShow": { display: "block" },
        "& .compactNavItem": {
          width: "100%",
          maxWidth: "100%",
          "& .nav-bullet": { display: "block" },
          "& .nav-bullet-text": { display: "none" },
        },
      },
    })
  );

  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const rightSidebar = settings.layout1Settings.rightSidebar;
  const { mode, bgImgURL } = rightSidebar;

  const getSidenavWidth = () => {
    console.log(mode);
    switch (mode) {
      case "compact":
        return sidenavCompactWidth;

      case "mobile":
        return sidenavMobileWidth;

      default:
        return sideNavWidth;
    }
  };

  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings: any) => {
    updateSettings({
      layout1Settings: { rightSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  return (
    <SidebarNavRoot image={bgImgURL} bg={primaryRGB} width={getSidenavWidth()}>
      <NavListBox>
        <Brand>
          <Hidden smDown>
            <Switch
              onChange={handleSidenavToggle}
              checked={rightSidebar.mode !== "full"}
              color="secondary"
              size="small"
            />
          </Hidden>
        </Brand>
        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default memo(Layout1Sidenav);
