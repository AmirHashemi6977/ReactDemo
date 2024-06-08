import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import { Fragment, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  dialogBackgroundColor,
  dialogTitleColor,
  info,
} from "../../../utils/colorPalette";
import {
  PreferencesDialogContex,
  ProfileDialogContex,
} from "../../../contexts/DialogsContex";
import InfoBox from "./infoBox";
import ChangePasswordBox from "./changePasswordBox";
import clsx from "clsx";
import PreferencesDialog from "../preferencesDialog";

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

export default function ProfileDialog() {
  const [isOpenProfileDialog, setIsOpenProfileDialog] =
    useContext(ProfileDialogContex);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xl");

  const handleClose = () => {
    setIsOpenProfileDialog(false);
  };

  const [isVisibleInfo, setIsVisibleInfo] = useState(true);
  const [isVisibleChangePass, setIsVisibleChangePass] = useState(false);

  const VisibleInfo = () => {
    setIsVisibleChangePass(false);
    setIsVisibleInfo(true);
  };

  const VisibleChangePass = () => {
    setIsVisibleInfo(false);
    setIsVisibleChangePass(true);
  };

  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={isOpenProfileDialog}
        onClose={handleClose}
        aria-labelledby="profile-dialog"
      >
        <DialogTitle sx={{ padding: 0 }}>
          <Box sx={{ backgroundColor: dialogTitleColor, height: 50 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
                  پروفایل
                </Typography>
                <ArrowBackIcon sx={{ color: "white" }}></ArrowBackIcon>
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>

        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: dialogBackgroundColor,
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Grid
              container
              columns={18}
              xs={18}
              md={18}
              lg={12}
              xl={12}
              spacing={0}
              margin={0}
            >
              <Box sx={{ padding: "10px", flexGrow: 1 }}>
                <IconButton
                  className={clsx(isVisibleInfo && "under-line-content-tab")}
                  sx={{ borderRadius: "5%" }}
                  onClick={VisibleInfo}
                >
                  <GroupIconButton
                    className={clsx(isVisibleInfo && "isActived")}
                  >
                    <Typography>اطلاعات شخصی</Typography>
                  </GroupIconButton>
                </IconButton>

                <IconButton
                  className={clsx(
                    isVisibleChangePass && "under-line-content-tab"
                  )}
                  sx={{ borderRadius: "5%" }}
                  onClick={VisibleChangePass}
                >
                  <GroupIconButton
                    className={clsx(isVisibleChangePass && "isActived")}
                  >
                    <Typography>تغییر رمز عبور</Typography>
                  </GroupIconButton>
                </IconButton>
                <Divider sx={{ width: "100%" }}></Divider>
              </Box>
            </Grid>

            {isVisibleInfo && <InfoBox></InfoBox>}
            {isVisibleChangePass && <ChangePasswordBox></ChangePasswordBox>}
          </Grid>
        </Box>

        <DialogActions
          sx={{
            justifyContent: "start",
            backgroundColor: dialogBackgroundColor,

            padding: "0px 15px 15px 0px ",
          }}
        >
          <Button
            onClick={handleClose}
            autoFocus
            color="info"
            variant="contained"
          >
            <Typography>ذخیره</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
