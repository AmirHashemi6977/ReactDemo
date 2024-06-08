import { Box, Divider, IconButton, Switch, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import { render } from "react-dom";
import { dialogBackgroundColor } from "../../../utils/colorPalette";
import { Span } from "../../Typography";

export default function SystemFoldersBox() {
  return (
    <Grid
      columns={18}
      xs={18}
      sm={18}
      md={18}
      lg={12}
      xl={12}
      marginX="10px"
      paddingBottom="34px"
    >
      <Grid>
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
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <strong>همه مقاله ها</strong>
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
        </Box>

        <Divider></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <strong>بعدا بخوانید </strong>
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
        </Box>

        <Divider></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <strong>کانال من</strong>
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
        </Box>

        <Divider></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <strong>مقاله های لینک شده</strong>
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
        </Box>

        <Divider></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <strong>وب سایت های ذخیره شده</strong>
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
        </Box>

        <Divider></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <strong>همه مقاله های نشان شده</strong>
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
        </Box>
      </Grid>
    </Grid>
  );
}
