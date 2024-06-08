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
import { AddTagsDialogContex } from "../../../contexts/DialogsContex";
import AddTagsDialog from "./addTagsDialog";

const IMG = styled("img")({
  width: "100%",
  marginBottom: "32px",
});

export default function TagsBox() {
  const [isVisibleTagsGrid, setIsVisibleTagsGrid] = useState(false);

  const [isOpenAddTagsDialog, setIsOpenAddTagsDialog] = useState(false);

  const OpenAddTagsDialog = () => {
    setIsOpenAddTagsDialog(true);
  };
  return (
    <Grid marginX="10px">
      {isVisibleTagsGrid ? (
        <Grid>
          <Box
            sx={{
              display: "flex",
              padding: "8px",
              backgroundColor: grdHeaderColor,
            }}
          >
            <Typography sx={{ marginLeft: "1%" }}>
              <strong>نشان شده: </strong>
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
              <strong>نشان شده 1</strong>
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
              <Tooltip title={<Typography>ویرایش نشان</Typography>} arrow>
                <IconButton>
                  <ModeEditOutlineOutlinedIcon color="disabled"></ModeEditOutlineOutlinedIcon>
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
                <strong>نشان شده ها</strong>
              </Typography>

              <Typography>
                مقاله ها را با نشان کردن سازمان دهی و به راحتی آنها را در اینجا
                مدیریت کنید.
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
                  image="/assets/images/contentDialog/content-tags.svg"
                  alt="content-tags"
                  sx={{ objectFit: "fill" }}
                ></CardMedia>
              </Card>
              <Button
                variant="contained"
                size="small"
                color="info"
                onClick={OpenAddTagsDialog}
              >
                <Typography>
                  <strong>اضافه کردن نشان</strong>{" "}
                </Typography>
              </Button>
            </Box>
          </Grid>
        </>
      )}
      <AddTagsDialogContex.Provider
        value={[isOpenAddTagsDialog, setIsOpenAddTagsDialog]}
      >
        <AddTagsDialog></AddTagsDialog>
      </AddTagsDialogContex.Provider>
    </Grid>
  );
}
