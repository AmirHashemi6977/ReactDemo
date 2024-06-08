import {
  Avatar,
  Badge,
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { dialogBackgroundColor, info } from "../../../utils/colorPalette";
import { Span } from "../../Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: dialogBackgroundColor,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //color: theme.palette.text.primary,
  color: "rgba(52, 49, 76, 1)",
  boxShadow: "unset",
  borderRadius: 0,
}));

const PlusIconButton = styled(Span)(({ theme }) => ({
  backgroundColor: dialogBackgroundColor,
  borderRadius: "50%",
}));

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    min-width: 235px;
    font-family: Vazirmatn;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 5px 12px;
    border-radius: 8px;
    color: ${grey[900]};
    background: "#fff";
    border: 1px solid ${grey[200]};
    box-shadow: 0px 2px 2px ${grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${info};
      box-shadow: 0 0 0 1px ${info};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

export default function InfoBox() {
  const [imageMainState, setImageMainState] = useState<string>("initial");
  const [imageUploaded, setImageUploaded] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<string>(
    "/assets/images/faces/3.jpg"
  );

  const handleUploadClick = (event: any) => {
    console.log(event);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setSelectedFile(reader.result as string);
    };

    setImageMainState("uploaded");
    setSelectedFile(file);
    setImageUploaded(1);
  };

  return (
    <>
      <Grid>
        <Item>
          <Box
            id="change-password"
            sx={{
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Typography>اطلاعات شخصی</Typography>
            </Box>
          </Box>
          <Divider sx={{ marginTop: 1 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              // marginRight: "23px",
              direction: "ltr",
            }}
          >
            <FormControl
              sx={{
                m: 1,
                width: "28ch",
                backgroundColor: "white",
              }}
              variant="outlined"
            >
              <TextField
                color="info"
                id="username"
                label={<Typography>نام کاربری</Typography>}
                variant="outlined"
              />
            </FormControl>

            <FormControl
              sx={{
                m: 1,
                width: "28ch",
                backgroundColor: "white",
              }}
              variant="outlined"
            >
              <TextField
                color="info"
                id="fullname"
                label={<Typography>نام و نام خانوادگی</Typography>}
                variant="outlined"
              />
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "28ch", backgroundColor: "white" }}
              variant="outlined"
            >
              <TextField
                color="info"
                id="emailAddress"
                label={<Typography>ایمیل</Typography>}
                variant="outlined"
              />
            </FormControl>
          </Box>
        </Item>
      </Grid>
      <Grid>
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
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <PlusIconButton>
                    <Tooltip
                      title={
                        <Typography>
                          برای تغییر عکس پروفایل کلیک کنید
                        </Typography>
                      }
                      arrow
                    >
                      <IconButton color="info" sx={{ padding: 0 }}>
                        <label htmlFor="contained-button-file">
                          <AddCircleIcon
                            sx={{
                              width: "50px",
                              height: "50px",
                            }}
                          ></AddCircleIcon>
                        </label>
                        <input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={handleUploadClick}
                          style={{ display: "none" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </PlusIconButton>
                }
              >
                <Avatar
                  sx={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "darkgreen",
                  }}
                  alt="Travis Howard"
                  src={selectedFile}
                />
              </Badge>
            </Stack>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Textarea
              aria-label="information"
              minRows={3}
              placeholder="توضیحات مخصتری درباره خودتان بنویسید"
              maxRows={3}
            />
          </Box>
        </Item>
      </Grid>
    </>
  );
}
