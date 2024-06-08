import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import X from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";

import { useTheme } from "@mui/material/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getDate } from "date-fns";
import { date } from "yup";
import { MoreHoriz } from "@mui/icons-material";
import { Span } from "./Typography";
import { Button, useMediaQuery } from "@mui/material";

const ExpandMore = styled((props: any) => {
  const { expand, ...other }: any = props;
  return <IconButton {...other} />;
})(({ theme, expand }: any) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ComplexCard() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }}>
      {isMdScreen ? (
        <>
          <CardHeader
            sx={{ mx: 1 }}
            title={
              <h6 style={{ marginBottom: 2 }}>
                [نرم افزار] دانلود TweakNow WinSecret Plus v5.3.2 - نرم افزار
                مدیریت تنظیمات ویندوز و بهینه سازی سیستم
              </h6>
            }
            subheader={<span>1402/12/26</span>}
          />
        </>
      ) : (
        <>
          <CardHeader
            sx={{ mx: 3, mt: 2, textAlign: "justify" }}
            title={
              <b>
                [نرم افزار] دانلود TweakNow WinSecret Plus v5.3.2 - نرم افزار
                مدیریت تنظیمات ویندوز و بهینه سازی سیستم
              </b>
            }
            subheader={<span>1402/12/26</span>}
          />
        </>
      )}

      <CardHeader
        sx={{ padding: 0, mx: 2, alignItems: "baseline" }}
        avatar={
          <div>
            {isMdScreen ? (
              <div style={{ inlineSize: 119 }}>
                <IconButton aria-label="avatarSettings">
                  <MoreHoriz />
                </IconButton>

                <IconButton aria-label="mail">
                  <MailOutlineIcon></MailOutlineIcon>
                </IconButton>

                <IconButton aria-label="facebook">
                  <FacebookIcon></FacebookIcon>
                </IconButton>

                <IconButton aria-label="x">
                  <X></X>
                </IconButton>
              </div>
            ) : (
              <>
                <IconButton aria-label="avatarSettings">
                  <MoreHoriz />
                </IconButton>

                <IconButton aria-label="mail">
                  <MailOutlineIcon></MailOutlineIcon>
                </IconButton>

                <IconButton aria-label="facebook">
                  <FacebookIcon></FacebookIcon>
                </IconButton>

                <IconButton aria-label="x">
                  <X></X>
                </IconButton>
              </>
            )}
          </div>
        }
        action={
          <div>
            {isMdScreen ? (
              <div style={{ inlineSize: 119 }}>
                <IconButton aria-label="actionSettings">
                  <MoreHoriz />
                </IconButton>

                <IconButton aria-label="tag">
                  <RecordVoiceOverOutlinedIcon></RecordVoiceOverOutlinedIcon>
                </IconButton>

                <IconButton aria-label="markAsUnread">
                  <TranslateOutlinedIcon></TranslateOutlinedIcon>
                </IconButton>

                <IconButton aria-label="loadFullContent">
                  <LocalCafeOutlinedIcon></LocalCafeOutlinedIcon>
                </IconButton>

                <IconButton aria-label="translate">
                  <CircleOutlinedIcon></CircleOutlinedIcon>
                </IconButton>

                <IconButton aria-label="textToSpeech">
                  <LocalOfferOutlinedIcon></LocalOfferOutlinedIcon>
                </IconButton>

                <IconButton aria-label="readLater">
                  <StarOutlineIcon></StarOutlineIcon>
                </IconButton>
              </div>
            ) : (
              <>
                <IconButton aria-label="actionSettings">
                  <MoreHoriz />
                </IconButton>

                <IconButton aria-label="tag">
                  <RecordVoiceOverOutlinedIcon></RecordVoiceOverOutlinedIcon>
                </IconButton>

                <IconButton aria-label="markAsUnread">
                  <TranslateOutlinedIcon></TranslateOutlinedIcon>
                </IconButton>

                <IconButton aria-label="loadFullContent">
                  <LocalCafeOutlinedIcon></LocalCafeOutlinedIcon>
                </IconButton>

                <IconButton aria-label="translate">
                  <CircleOutlinedIcon></CircleOutlinedIcon>
                </IconButton>

                <IconButton aria-label="textToSpeech">
                  <LocalOfferOutlinedIcon></LocalOfferOutlinedIcon>
                </IconButton>

                <IconButton aria-label="readLater">
                  <StarOutlineIcon></StarOutlineIcon>
                </IconButton>
              </>
            )}
          </div>
        }
      />
      <CardMedia
        component="img"
        image="https://img.p30download.ir/software/image/2023/07/1690196433_tweaknow-winsecret-plus.jpg"
        alt="TweakNow WinSecret Plus v5.3.2 - نرم افزار مدیریت تنظیمات ویندوز و بهینه سازی سیستم"
      />
      <CardContent>
        {isMdScreen ? (
          <>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify" }}
              color="text.secondary"
            >
              TweakNow WinSecret به کاربران اجازه می دهد تا تنظیمات مخفی ویندوز
              را بررسی کنند.این برنامه به طور خاص برای سیستم عامل ویندوز طراحی
              شده است تا کاربر بتواند از طریق یک رابط کاربری گرافیکی به راحتی
              تنظیمات ویندوز را سفارشی سازی کند. یکی از مهمترین ویژگی های نرم
              افزار TweakNow WinSecret انجام تنظیمات رجیستری و بهینه سازی آن
              است.رجیستری یکی از مهمترین اجزای سیستم عامل است که معمولا کاربران
              حرفه ای تر ویندوز با استفاده از Regedit به ویرایش آن میپردازند اما
              برای یک کاربر تازه کار می تواند به طور بالقوه مشکلات حیاتی را
              ایجاد می‌کند. TweakNow WinSecret به ...
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              sx={{ textAlign: "justify" }}
              color="text.secondary"
            >
              TweakNow WinSecret به کاربران اجازه می دهد تا تنظیمات مخفی ویندوز
              را بررسی کنند.این برنامه به طور خاص برای سیستم عامل ویندوز طراحی
              شده است تا کاربر بتواند از طریق یک رابط کاربری گرافیکی به راحتی
              تنظیمات ویندوز را سفارشی سازی کند. یکی از مهمترین ویژگی های نرم
              افزار TweakNow WinSecret انجام تنظیمات رجیستری و بهینه سازی آن
              است.رجیستری یکی از مهمترین اجزای سیستم عامل است که معمولا کاربران
              حرفه ای تر ویندوز با استفاده از Regedit به ویرایش آن میپردازند اما
              برای یک کاربر تازه کار می تواند به طور بالقوه مشکلات حیاتی را
              ایجاد می‌کند. TweakNow WinSecret به ...
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
