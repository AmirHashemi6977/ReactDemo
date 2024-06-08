import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import { Fragment, createContext, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Avatar,
  Badge,
  Divider,
  FormControl,
  IconButton,
  Input,
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
import {
  dialogBackgroundColor,
  dialogTitleColor,
} from "../../../utils/colorPalette";
import { AddTagsDialogContex } from "../../../contexts/DialogsContex";

export default function AddTagsDialog() {
  const [isOpenAddTagsDialog, setIsOpeAddTagsDialog] =
    useContext(AddTagsDialogContex);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xl");

  const handleClose = () => {
    setIsOpeAddTagsDialog(false);
  };

  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={isOpenAddTagsDialog}
        onClose={handleClose}
      >
        <DialogTitle sx={{ padding: 0 }}>
          <Box sx={{ height: 40, backgroundColor: "white" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{ color: theme.palette.text.disabled }}
              ></CloseIcon>
            </IconButton>
          </Box>
        </DialogTitle>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            width: "300px",
            paddingBottom: 2,
            backgroundColor: "white",
          }}
        >
          <Grid container>
            <Grid
              container
              columns={18}
              xs={12}
              md={12}
              lg={18}
              xl={18}
              spacing={0}
              margin={0}
            >
              <TextField
                label={<Typography>یک نام نشان تعریف کنید</Typography>}
                id="AddTags-input"
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                color="info"
              />
            </Grid>
          </Grid>
        </Box>

        <DialogActions
          sx={{
            justifyContent: "start",
            alignItems: "center",
            backgroundColor: dialogBackgroundColor,

            padding: "15px 15px 15px 0px ",
          }}
        >
          <Button
            onClick={handleClose}
            autoFocus
            color="info"
            variant="contained"
            sx={{ marginLeft: "10px" }}
          >
            <Typography>ذخیره</Typography>
          </Button>

          <Button
            onClick={handleClose}
            autoFocus
            color="inherit"
            variant="contained"
          >
            <Typography>انصراف</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
