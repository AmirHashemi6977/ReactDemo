import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Fragment, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, IconButton, Typography, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { dialogTitleColor, info } from "../../../utils/colorPalette";
import {
  ContentDialogContex,
  PreferencesDialogContex,
} from "../../../contexts/DialogsContex";
import SystemFoldersBox from "./systemFoldersBox";
import clsx from "clsx";
import TagsBox from "./tagsBox";
import FoldersBox from "./foldersBox";
import FeedsBox from "./feedsBox";

//Styled Component
const GroupIconButton = styled(Typography)({
  borderRadius: "10%",

  "&:hover": {
    color: info,
  },

  "&.isActived": {
    color: info,
  },
});

export default function ContentDialog() {
  const [isOpenContentDialog, setIsOpenContentDialog] =
    useContext(ContentDialogContex);

  const [isVisibleFeeds, setIsVisibleFeeds] = useState(true);
  const [isVisibleFolders, setIsVisibleFolders] = useState(false);
  const [isVisibleTags, setIsVisibleTags] = useState(false);
  const [isVisibleSystemFolders, setIsVisibleSystemFolders] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("sm");

  const handleClose = () => {
    setIsOpenContentDialog(false);
  };

  const VisibleFeeds = () => {
    setIsVisibleFolders(false);
    setIsVisibleTags(false);
    setIsVisibleSystemFolders(false);
    setIsVisibleFeeds(true);
  };

  const VisibleFolders = () => {
    setIsVisibleFeeds(false);
    setIsVisibleTags(false);
    setIsVisibleSystemFolders(false);
    setIsVisibleFolders(true);
  };

  const VisibleTags = () => {
    setIsVisibleFeeds(false);
    setIsVisibleFolders(false);
    setIsVisibleSystemFolders(false);
    setIsVisibleTags(true);
  };

  const VisibleSystemFolders = () => {
    setIsVisibleFeeds(false);
    setIsVisibleFolders(false);
    setIsVisibleTags(false);
    setIsVisibleSystemFolders(true);
  };
  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        //maxWidth={maxWidth}
        open={isOpenContentDialog}
        onClose={handleClose}
        aria-labelledby="profile-dialog"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "750px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: dialogTitleColor,
              height: 50,
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "white" }}></CloseIcon>
            </IconButton>

            <IconButton onClick={handleClose}>
              <Typography
                sx={{
                  color: "white",
                  marginLeft: 1,
                }}
              >
                محتویات
              </Typography>
              <ArrowBackIcon sx={{ color: "white" }}></ArrowBackIcon>
            </IconButton>
          </Box>
        </DialogTitle>

        <Box
          sx={{
            flexGrow: 1,
            paddingBottom: "60px",
            backgroundColor: "white",
          }}
        >
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid columns={18} xs={18} sm={18} md={18} lg={12} xl={12}>
              <Box sx={{ padding: "10px" }}>
                <IconButton
                  className={clsx(isVisibleFeeds && "under-line-content-tab")}
                  sx={{ borderRadius: "5%" }}
                  onClick={VisibleFeeds}
                >
                  <GroupIconButton
                    className={clsx(isVisibleFeeds && "isActived")}
                  >
                    <Typography>بازخوردها</Typography>
                  </GroupIconButton>
                </IconButton>

                <IconButton
                  className={clsx(isVisibleFolders && "under-line-content-tab")}
                  sx={{ borderRadius: "5%" }}
                  onClick={VisibleFolders}
                >
                  <GroupIconButton
                    className={clsx(isVisibleFolders && "isActived")}
                  >
                    <Typography>پوشه ها</Typography>
                  </GroupIconButton>
                </IconButton>

                <IconButton
                  className={clsx(isVisibleTags && "under-line-content-tab")}
                  sx={{ borderRadius: "5%" }}
                  onClick={VisibleTags}
                >
                  <GroupIconButton
                    className={clsx(isVisibleTags && "isActived")}
                  >
                    <Typography>نشان شده ها</Typography>
                  </GroupIconButton>
                </IconButton>

                <IconButton
                  className={clsx(
                    isVisibleSystemFolders && "under-line-content-tab"
                  )}
                  sx={{ borderRadius: "5%" }}
                  onClick={VisibleSystemFolders}
                >
                  <GroupIconButton
                    className={clsx(isVisibleSystemFolders && "isActived")}
                  >
                    <Typography>پوشه های سیستمی</Typography>
                  </GroupIconButton>
                </IconButton>
                <Divider></Divider>
              </Box>
            </Grid>

            {isVisibleSystemFolders && <SystemFoldersBox></SystemFoldersBox>}

            {isVisibleTags && <TagsBox></TagsBox>}

            {isVisibleFolders && <FoldersBox></FoldersBox>}

            {isVisibleFeeds && <FeedsBox></FeedsBox>}
          </Grid>
        </Box>
      </Dialog>
    </Fragment>
  );
}
