import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import {
  Fragment,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Avatar,
  Badge,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Flex } from "antd";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Span } from "../Typography";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import ResetPasswordDialog from "./profileDialog/resetPasswordDialog";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import {
  dialogBackgroundColor,
  dialogTitleColor,
} from "../../utils/colorPalette";
import {
  ContentDialogContex,
  PreferencesDialogContex,
  ProfileDialogContex,
} from "../../contexts/DialogsContex";
import ProfileDialog from "./profileDialog/profileDialog";
import ContentDialog from "./contentsDialog/contentDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: dialogBackgroundColor,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //color: theme.palette.text.primary,
  color: "rgba(52, 49, 76, 1)",
  boxShadow: "unset",
  borderRadius: 0,
  marginTop: "20px",
}));

export default function PreferencesDialog() {
  const [isOpenPreferencesDialog, setIsOpenPreferencesDialog] = useContext(
    PreferencesDialogContex
  );

  const [isOpenProfileDialog, setIsOpenProfileDialog] = useState(false);
  const [isOpenContentDialog, setIsOpenContentDialog] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xl");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setIsOpenPreferencesDialog(false);
  };

  const OpenProfileDialog = (e: any) => {
    setIsOpenProfileDialog(true);
  };

  const OpenContentDialog = (e: any) => {
    setIsOpenContentDialog(true);
  };

  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={isOpenPreferencesDialog}
        onClose={handleClose}
        aria-labelledby="preferences-dialog"
      >
        <DialogTitle sx={{ padding: 0 }}>
          <Box sx={{ backgroundColor: dialogTitleColor, height: 50 }}>
            <Flex justify="space-between" align="center">
              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ color: "white" }}></CloseIcon>
              </IconButton>

              <Typography
                sx={{
                  color: "white",
                  marginLeft: 1,
                }}
              >
                تنظیمات
              </Typography>
            </Flex>
          </Box>
        </DialogTitle>

        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: dialogBackgroundColor,
            paddingBottom: "12px",
          }}
        >
          <Grid container>
            <Grid
              container
              columns={12}
              xs={12}
              md={12}
              lg={12}
              xl={12}
              spacing={0}
              margin={0}
            >
              <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                <Item>
                  <button
                    style={{
                      minWidth: "265px",
                      border: "0",
                      cursor: "pointer",
                      paddingBlock: "0px",
                      paddingInline: "0px",
                    }}
                    type="button"
                    onClick={OpenProfileDialog}
                  >
                    <Box
                      id="profile-preferences"
                      sx={{
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        height: "62px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <PersonOutlineOutlinedIcon
                          sx={{ fontSize: "38px", marginLeft: "10px" }}
                          color="info"
                        ></PersonOutlineOutlinedIcon>
                        <div>
                          <Typography display="flex" justifyContent="start">
                            <strong>پروفایل</strong>
                          </Typography>
                          <Typography>اطلاعات شخصی</Typography>
                        </div>
                      </Box>
                    </Box>
                  </button>
                </Item>
              </Grid>

              <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                <Item>
                  <button
                    style={{
                      minWidth: "265px",
                      border: "0",
                      cursor: "pointer",
                      paddingBlock: "0px",
                      paddingInline: "0px",
                    }}
                    type="button"
                    onClick={OpenContentDialog}
                  >
                    <Box
                      id="profile-preferences"
                      sx={{
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        height: "62px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <TocOutlinedIcon
                          sx={{ fontSize: "38px", marginLeft: "10px" }}
                          color="info"
                        ></TocOutlinedIcon>
                        <div>
                          <Typography display="flex" justifyContent="start">
                            <strong>محتویات</strong>
                          </Typography>
                          <Typography>
                            مدیریت بازخوردها، پوشه ها و ...
                          </Typography>
                        </div>
                      </Box>
                    </Box>
                  </button>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
      <ProfileDialogContex.Provider
        value={[isOpenProfileDialog, setIsOpenProfileDialog]}
      >
        <ProfileDialog></ProfileDialog>
      </ProfileDialogContex.Provider>

      <ContentDialogContex.Provider
        value={[isOpenContentDialog, setIsOpenContentDialog]}
      >
        <ContentDialog></ContentDialog>
      </ContentDialogContex.Provider>
    </Fragment>
  );
}
