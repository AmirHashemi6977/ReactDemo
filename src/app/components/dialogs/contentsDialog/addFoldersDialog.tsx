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
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
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
import { AddFoldersDialogContex } from "../../../contexts/DialogsContex";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["دیجی کالا", "ایمالز"];

export default function AddFoldersDialog() {
  const [isOpenAddFoldersDialog, setIsOpeAddFoldersDialog] = useContext(
    AddFoldersDialogContex
  );

  const [personName, setPersonName] = useState<string[]>([]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xl");

  const handleClose = () => {
    setIsOpeAddFoldersDialog(false);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={isOpenAddFoldersDialog}
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
            paddingBottom: 3,
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
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  paddingX: "37px",
                }}
              >
                <TextField
                  label={<Typography>نام پوشه</Typography>}
                  id="AddFolders-input"
                  sx={{ marginBottom: 1, width: "25ch" }}
                  variant="outlined"
                  color="info"
                />

                <FormControl sx={{ width: "25ch" }}>
                  <InputLabel id="lblSubscriptions-list" color="info">
                    <Typography>حداقل یک اشتراک را انتخاب کنید</Typography>
                  </InputLabel>
                  <Select
                    labelId="lblSubscriptions-list"
                    id="drpSubscriptions-list"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    dir="rtl"
                    color="info"
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={personName.indexOf(name) > -1}
                          color="info"
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
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
