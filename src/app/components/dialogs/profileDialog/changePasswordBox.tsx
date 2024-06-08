import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { dialogBackgroundColor } from "../../../utils/colorPalette";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { ResetPasswordDialogContex } from "../../../contexts/DialogsContex";
import ResetPasswordDialog from "./resetPasswordDialog";
import clsx from "clsx";

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

const GridMobil = styled(Grid)({
  paddingRight: "127px",
  paddingLeft: "126px",
  paddingTop: "1px",
});

export default function ChangePasswordBox() {
  const theme = useTheme();
  const mobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  const [isOpenResetPasswordDialog, setIsOpenResetPasswordDialog] =
    useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleOpenResetPasswordDialog = () => {
    setIsOpenResetPasswordDialog(true);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid>
        {mobileMode ? (
          <Item>
            <Box
              id="change-password"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>تغییر رمز عبور</Typography>
                <Link
                  onClick={handleOpenResetPasswordDialog}
                  underline="hover"
                  sx={{ color: "darkblue", cursor: "pointer" }}
                >
                  <Typography>تغییر توسط ایمیل</Typography>
                </Link>
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
                direction: "ltr",
                marginRight: "45px",
              }}
            >
              <FormControl
                sx={{
                  m: 1,
                  width: "22ch",
                  backgroundColor: "white",
                }}
                variant="outlined"
              >
                <InputLabel color="info" htmlFor="old-password">
                  <Typography>رمز عبور قبلی</Typography>
                </InputLabel>

                <OutlinedInput
                  id="old-password"
                  color="info"
                  sx={{
                    width: "28ch",
                    backgroundColor: "white",
                  }}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="OldPassword"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "22ch", backgroundColor: "white" }}
                variant="outlined"
              >
                <InputLabel color="info" htmlFor="outlined-adornment-password">
                  <Typography>رمز عبور جدید</Typography>
                </InputLabel>
                <OutlinedInput
                  id="new-password"
                  color="info"
                  sx={{ width: "28ch", backgroundColor: "white" }}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="newPassword"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "22ch", backgroundColor: "white" }}
                variant="outlined"
              >
                <InputLabel color="info" htmlFor="outlined-adornment-password">
                  <Typography>تکرار رمز عبور جدید</Typography>
                </InputLabel>
                <OutlinedInput
                  id="repeat-new-password"
                  color="info"
                  sx={{ width: "28ch", backgroundColor: "white" }}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="repeatNewPassword"
                />
              </FormControl>
            </Box>
          </Item>
        ) : (
          <GridMobil className={clsx(mobileMode)}>
            <Item>
              <Box
                id="change-password"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>تغییر رمز عبور</Typography>
                  <Link
                    onClick={handleOpenResetPasswordDialog}
                    underline="hover"
                    sx={{ color: "darkblue", cursor: "pointer" }}
                  >
                    <Typography>تغییر توسط ایمیل</Typography>
                  </Link>
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
                  direction: "ltr",
                  marginRight: "45px",
                }}
              >
                <FormControl
                  sx={{
                    m: 1,
                    width: "22ch",
                    backgroundColor: "white",
                  }}
                  variant="outlined"
                >
                  <InputLabel color="info" htmlFor="old-password">
                    <Typography>رمز عبور قبلی</Typography>
                  </InputLabel>

                  <OutlinedInput
                    id="old-password"
                    color="info"
                    sx={{
                      width: "28ch",
                      backgroundColor: "white",
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="OldPassword"
                  />
                </FormControl>

                <FormControl
                  sx={{ m: 1, width: "22ch", backgroundColor: "white" }}
                  variant="outlined"
                >
                  <InputLabel
                    color="info"
                    htmlFor="outlined-adornment-password"
                  >
                    <Typography>رمز عبور جدید</Typography>
                  </InputLabel>
                  <OutlinedInput
                    id="new-password"
                    color="info"
                    sx={{ width: "28ch", backgroundColor: "white" }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="newPassword"
                  />
                </FormControl>

                <FormControl
                  sx={{ m: 1, width: "22ch", backgroundColor: "white" }}
                  variant="outlined"
                >
                  <InputLabel
                    color="info"
                    htmlFor="outlined-adornment-password"
                  >
                    <Typography>تکرار رمز عبور جدید</Typography>
                  </InputLabel>
                  <OutlinedInput
                    id="repeat-new-password"
                    color="info"
                    sx={{ width: "28ch", backgroundColor: "white" }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="repeatNewPassword"
                  />
                </FormControl>
              </Box>
            </Item>
          </GridMobil>
        )}
      </Grid>
      <ResetPasswordDialogContex.Provider
        value={[isOpenResetPasswordDialog, setIsOpenResetPasswordDialog]}
      >
        <ResetPasswordDialog></ResetPasswordDialog>
      </ResetPasswordDialogContex.Provider>
    </>
  );
}
