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
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Flex } from "antd";

import {
  dialogBackgroundColor,
  dialogTitleColor,
} from "../../../utils/colorPalette";
import { ResetPasswordDialogContex } from "../../../contexts/DialogsContex";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: dialogBackgroundColor,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  boxShadow: "unset",
  borderRadius: 0,
}));

export default function ResetPasswordDialog() {
  const [isopen, setIsOpen] = useContext(ResetPasswordDialogContex);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xl");

  const handleClose = () => {
    setIsOpen(false);
  };

  const [selectedFile, setSelectedFile] = useState<string>(
    "/assets/images/faces/3.jpg"
  );

  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={isopen}
        onClose={handleClose}
        aria-labelledby="profile-dialog"
      >
        <DialogTitle sx={{ padding: 0 }}>
          <Box sx={{ backgroundColor: dialogTitleColor, height: 50 }}>
            <Flex justify="start" align="center">
              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ color: "white" }}></CloseIcon>
              </IconButton>
            </Flex>
          </Box>
        </DialogTitle>

        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: dialogBackgroundColor,
          }}
        >
          <Grid container>
            <Item>
              <Box
                id="profilePic"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "center", padding: "10px" }}
                >
                  <Avatar
                    sx={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "darkgreen",
                    }}
                    alt="Travis Howard"
                    src={selectedFile}
                  />
                </Stack>
                <Typography sx={{ textTransform: "lowercase" }}>
                  a.hashemi6977@gmail.com
                </Typography>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <Typography>
                  برای تغییر رمز عبور یک لینک به ایمیل شما ارسال خواهد شد، ایمیل
                  خود را دقایقی دیگر بررسی کنید.
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Box>

        <DialogActions
          sx={{
            justifyContent: "start",
            backgroundColor: dialogBackgroundColor,

            padding: "10px 15px 15px 0px ",
          }}
        >
          <Button
            onClick={handleClose}
            autoFocus
            color="info"
            variant="contained"
          >
            <Typography>ارسال ایمیل</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
