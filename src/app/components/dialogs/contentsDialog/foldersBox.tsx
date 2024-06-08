import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Switch,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  dialogBackgroundColor,
  grdHeaderColor,
} from "../../../utils/colorPalette";
import { Span } from "../../Typography";
import { useState } from "react";
import { AddFoldersDialogContex } from "../../../contexts/DialogsContex";
import AddFoldersDialog from "./addFoldersDialog";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import RuleFolderOutlinedIcon from "@mui/icons-material/RuleFolderOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const IMG = styled("img")({
  width: "100%",
  marginBottom: "32px",
});

export default function FoldersBox() {
  const [isVisibleFoldersGrid, setIsVisibleFoldersGrid] = useState(false);

  const [isOpenAddFoldersDialog, setIsOpenAddFoldersDialog] = useState(false);

  const OpenAddFoldersDialog = () => {
    setIsOpenAddFoldersDialog(true);
  };
  return (
    <Grid marginX="10px">
      {isVisibleFoldersGrid ? (
        <Grid columns={18} xs={18} sm={18} md={18} lg={12} xl={12}>
          <Box
            sx={{
              display: "flex",
              padding: "8px",
              backgroundColor: grdHeaderColor,
            }}
          >
            <Typography sx={{ marginLeft: "1%" }}>
              <strong>پوشه: </strong>
            </Typography>

            <Typography>
              <strong>1</strong>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              backgroundColor: dialogBackgroundColor,
            }}
          >
            <Typography sx={{ marginLeft: "10%" }}>
              <strong>نام</strong>
            </Typography>

            <Typography>
              <strong>خروجی بازخوردها</strong>
            </Typography>

            <Typography></Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>
              <strong>پوشه 1</strong>
            </Typography>

            <Span
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Switch
                onChange={() => null}
                checked={false}
                color="secondary"
                size="small"
              />

              <Typography>RSS</Typography>
              <IconButton>
                <ShieldMoonIcon color="warning"></ShieldMoonIcon>
              </IconButton>

              <Typography>JSON</Typography>
              <IconButton>
                <ShieldMoonIcon color="warning"></ShieldMoonIcon>
              </IconButton>

              <Typography>HTML Clip</Typography>
            </Span>

            <Span
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Tooltip title={<Typography>ویرایش پوشه</Typography>} arrow>
                <IconButton>
                  <ModeEditOutlineOutlinedIcon color="disabled"></ModeEditOutlineOutlinedIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title={<Typography>دانلود OPML</Typography>} arrow>
                <IconButton>
                  <SaveAltIcon color="disabled"></SaveAltIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title={<Typography> ایجاد قوانین</Typography>} arrow>
                <IconButton>
                  <RuleFolderOutlinedIcon color="disabled"></RuleFolderOutlinedIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title={<Typography>فیلتر بازخورد</Typography>} arrow>
                <IconButton>
                  <FilterAltOutlinedIcon color="disabled"></FilterAltOutlinedIcon>
                </IconButton>
              </Tooltip>

              <Tooltip title={<Typography>حذف پوشه</Typography>} arrow>
                <IconButton>
                  <DeleteOutlineOutlinedIcon color="disabled"></DeleteOutlineOutlinedIcon>
                </IconButton>
              </Tooltip>
            </Span>
          </Box>

          <Divider></Divider>
        </Grid>
      ) : (
        <>
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px",
              }}
            >
              <Typography sx={{ marginBottom: "1%" }}>
                <strong> پوشه ها</strong>
              </Typography>

              <Typography>
                اشتراک هایتان را در پوشه ها سازمان دهی و به راحتی آنها را در
                اینجا مدیریت کنید.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Card
                sx={{
                  maxWidth: 400,
                  marginBottom: 3,
                  boxShadow: "none !important",
                  backgroundColor: "unset",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/assets/images/contentDialog/content-folders.svg"
                  alt="content-Folders"
                  sx={{ objectFit: "fill" }}
                ></CardMedia>
              </Card>
              <Button
                variant="contained"
                size="small"
                color="info"
                onClick={OpenAddFoldersDialog}
              >
                <Typography>
                  <strong>اضافه کردن پوشه</strong>{" "}
                </Typography>
              </Button>
            </Box>
          </Grid>
        </>
      )}
      <AddFoldersDialogContex.Provider
        value={[isOpenAddFoldersDialog, setIsOpenAddFoldersDialog]}
      >
        <AddFoldersDialog></AddFoldersDialog>
      </AddFoldersDialogContex.Provider>
    </Grid>
  );
}
