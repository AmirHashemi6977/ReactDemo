import { Avatar, Box, styled } from "@mui/material";

// STYLED COMPONENTS
const StyledAvatar = styled(Avatar)({
  height: 40,
  width: 40
});

interface IStatusCircleProps {
  status: string; // Assuming status is a string
}

const StatusCircle = styled("div")<IStatusCircleProps>(({ theme, status }:any) => ({
  height: 14,
  width: 14,
  bottom: 0,
  right: "-3px",
  borderRadius: "7px",
  position: "absolute",
  border: "2px solid white",
  color: status !== "online"?"white !important": "",
  background: status === "online" ? theme.palette.primary.main : theme.palette.error.main
}));

export default function ChatAvatar({ src, status }:{ src: string; status: string }) {
  return (
    <Box position="relative">
      <StyledAvatar src={src} />
      <StatusCircle status={status} />
    </Box>
  );
}
