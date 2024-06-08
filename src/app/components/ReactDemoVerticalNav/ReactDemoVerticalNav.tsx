import { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  ButtonBase,
  Icon,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

import useSettings from "../../hooks/useSettings";
import { Paragraph, Span } from "../Typography";
import ReactDemoVerticalNavExpansionPanel from "./ReactDemoVerticalNavExpansionPanel";
import SettingsIcon from "@mui/icons-material/Settings";
import { PreferencesDialogContex } from "../../contexts/DialogsContex";
import PreferencesDialog from "../dialogs/preferencesDialog";

// STYLED COMPONENTS

const ExtAndIntCommon = {
  display: "flex",
  overflow: "hidden",
  borderRadius: "4px",
  height: 44,
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
  justifyContent: "space-between",
  transition: "all 150ms ease-in",
  "&:hover": { background: "rgba(255, 255, 255, 0.08)" },
  "&.compactNavItem": {
    overflow: "hidden",
    justifyContent: "center !important",
  },
  "& .icon": {
    fontSize: "18px",
    paddingLeft: "16px",
    paddingRight: "16px",
    verticalAlign: "middle",
  },
};

const InternalLink = styled(Box)(({ theme }) => ({
  "& a": {
    ...ExtAndIntCommon,

    //color: theme.palette.text.primary,
    color: "white",
  },
  // "& .navItemActive": {
  //   backgroundColor: "rgba(255, 255, 255, 0.16)",
  // },
}));

const StyledText = styled(Span)(({ mode }) => ({
  fontFamily: "Vazirmatn !important",
  fontSize: "0.875rem",
  paddingLeft: "0.8rem",
  display: mode === "compact" ? "none" : "",
}));

const BulletIcon = styled("div")(({ theme }) => ({
  padding: "2px",
  marginLeft: "24px",
  marginRight: "8px",
  overflow: "hidden",
  borderRadius: "300px",
  //background: theme.palette.text.primary,
  background: "white",
}));

const BaseButton = styled(ButtonBase)(({ theme }) => ({
  height: 44,
  width: "100%",
  whiteSpace: "pre",
  overflow: "hidden",
  borderRadius: "4px",
  marginBottom: "8px",
  display: "flex",
  justifyContent: "space-between !important",
  //color: theme.palette.text.primary,
  color: "white",
  "&:hover": { background: "rgba(255, 255, 255, 0.08)" },
  "& .icon": {
    width: 36,
    fontSize: "18px",
    paddingLeft: "16px",
    paddingRight: "16px",
    verticalAlign: "middle",
  },
}));

export default function ReactDemoVerticalNav({ items }: any) {
  const { settings } = useSettings();
  const { mode } = settings.layout1Settings.rightSidebar;

  const [isOpenPreferencesDialog, setIsOpenPreferencesDialog] = useState(false);

  const openPreferencesDialog = () => {
    setIsOpenPreferencesDialog(true);
    console.log(isOpenPreferencesDialog);
  };

  const renderLevels = (data: any) => {
    return data.map((item: any, index: any) => {
      if (item.children) {
        return (
          <ReactDemoVerticalNavExpansionPanel
            mode={mode}
            item={item}
            key={index}
          >
            {renderLevels(item.children)}
          </ReactDemoVerticalNavExpansionPanel>
        );
      } else {
        return (
          <InternalLink key={index}>
            <NavLink to={item.path}>
              <ButtonBase key={item.name} name="child" sx={{ width: "100%" }}>
                {item?.icon ? (
                  <Icon className="icon" sx={{ width: 36 }}>
                    {item.icon}
                  </Icon>
                ) : (
                  <Fragment>
                    <BulletIcon
                      className={`nav-bullet`}
                      sx={{ display: mode === "compact" ? "none" : "" }}
                    />
                    <Box
                      className="nav-bullet-text"
                      sx={{
                        ml: "20px",
                        fontSize: "11px",
                        display: mode !== "compact" ? "none" : "",
                      }}
                    >
                      {item.iconText}
                    </Box>
                  </Fragment>
                )}
                <StyledText mode={mode}>{item.name}</StyledText>

                <Box mx="auto" />
              </ButtonBase>
            </NavLink>
          </InternalLink>
        );
      }
    });
  };

  return (
    <div>
      <div className="navigation">{renderLevels(items)}</div>

      <BaseButton onClick={openPreferencesDialog}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SettingsIcon sx={{ marginLeft: "12px" }}></SettingsIcon>
          <StyledText mode={mode}>تنظیمات</StyledText>
        </Box>
      </BaseButton>
      <PreferencesDialogContex.Provider
        value={[isOpenPreferencesDialog, setIsOpenPreferencesDialog]}
      >
        <PreferencesDialog></PreferencesDialog>
      </PreferencesDialogContex.Provider>
    </div>
  );
}
