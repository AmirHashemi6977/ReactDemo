import { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  styled,
  Avatar,
  Hidden,
  useTheme,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import { NotificationProvider } from "../../../contexts/NotificationContext";

import useAuth from "../../../hooks/useAuth";
import useSettings from "../../../hooks/useSettings";

import { Span } from "../../../components/Typography";
import ShoppingCart from "../../../components/ShoppingCart";
import {
  ChatHead,
  Chatbox,
  ReactDemoMenu,
  ReactDemoSearchBox,
} from "../../../components";
import { NotificationBar } from "../../../components/NotificationBar";
import { themeShadows } from "../../../components/ReactDemoTheme/themeColors";

import { topBarHeight } from "../../../utils/constant";

import {
  Home,
  Menu,
  Person,
  Settings,
  PowerSettingsNew,
} from "@mui/icons-material";
import ProfileDialog from "../../dialogs/profileDialog/profileDialog";
import PreferencesDialog from "../../dialogs/preferencesDialog";
import {
  PreferencesDialogContex,
  ProfileDialogContex,
} from "../../../contexts/DialogsContex";
import Comment from "@mui/icons-material/Comment";
import ChatBoxTheme from "./chatBoxTheme";

// STYLED COMPONENTS
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled("div")({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: "all 0.3s ease",
});

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  paddingLeft: 18,
  paddingRight: 20,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: { paddingLeft: 16, paddingRight: 16 },
  [theme.breakpoints.down("xs")]: { paddingLeft: 14, paddingRight: 16 },
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: "flex",
  borderRadius: 24,
  cursor: "pointer",
  alignItems: "center",
  "& span": { margin: "0 8px" },
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "Vazirmatn",
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary },
}));

const IconBox = styled("div")(({ theme }) => ({
  display: "inherit",
  [theme.breakpoints.down("md")]: { display: "none !important" },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const updateSidebarMode = (sidebarSettings: any) => {
    updateSettings({
      layout1Settings: { rightSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.rightSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.rightSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };

  const [isOpenProfileDialog, setIsOpenProfileDialog] = useState(false);

  const [isOpenPreferencesDialog, setIsOpenPreferencesDialog] = useState(false);

  const openProfileDialog = () => {
    setIsOpenProfileDialog(true);
  };

  const openPreferencesDialog = () => {
    setIsOpenPreferencesDialog(true);
  };

  const chatBoxTheme = settings.themes[settings.chatBoxTheme.theme];

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Menu />
          </StyledIconButton>

          <ReactDemoSearchBox />
        </Box>

        <Box display="flex" alignItems="center">
          <ChatBoxTheme theme={chatBoxTheme}>
            <ChatHead
              icon={
                <IconButton
                  size="small"
                  sx={{ my: "12px", color: theme.palette.primary.contrastText }}
                >
                  <Comment />
                </IconButton>
              }
            >
              <Chatbox />
            </ChatHead>
          </ChatBoxTheme>

          <NotificationProvider>
            <NotificationBar />
          </NotificationProvider>

          <ShoppingCart />

          <ReactDemoMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    {/* سلام <strong>{user.name}</strong> */}
                    سلام <strong>امیر هاشمی</strong>
                  </Span>
                </Hidden>

                {user && (user as any).avatar && (
                  <Avatar
                    src={(user as any).avatar}
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                <Home />
                <Span>خانه</Span>
              </Link>
            </StyledItem>

            <StyledItem onClick={openProfileDialog}>
              <Person />
              <Span>پروفایل</Span>
            </StyledItem>

            <StyledItem onClick={openPreferencesDialog}>
              <Settings />
              <Span>تنظیمات</Span>
            </StyledItem>

            <StyledItem onClick={logout}>
              <PowerSettingsNew />
              <Span>خروج</Span>
            </StyledItem>
          </ReactDemoMenu>
        </Box>
      </TopbarContainer>

      <ProfileDialogContex.Provider
        value={[isOpenProfileDialog, setIsOpenProfileDialog]}
      >
        <ProfileDialog></ProfileDialog>
      </ProfileDialogContex.Provider>

      <PreferencesDialogContex.Provider
        value={[isOpenPreferencesDialog, setIsOpenPreferencesDialog]}
      >
        <PreferencesDialog></PreferencesDialog>
      </PreferencesDialogContex.Provider>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
