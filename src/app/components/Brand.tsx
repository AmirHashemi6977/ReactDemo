import { Box, styled } from "@mui/material";

import { Span } from "./Typography";
import { ReactDemoLogo } from "../components";
import useSettings from "../hooks/useSettings";
import clsx from "clsx";

// STYLED COMPONENTS
const BrandRoot = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px",
}));

const BrandRootHover = styled(Box)(() => ({
  "&:hover": {
    padding: 0,
    flexDirection: "column-reverse",
  },
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginRight: ".5rem",
  color: "white",
  display: mode === "compact" ? "none" : "block",
}));

export default function Brand({ children }: any) {
  const { settings } = useSettings();
  const rightSidebar = settings.layout1Settings.rightSidebar;
  const { mode } = rightSidebar;

  return (
    <BrandRoot>
      {mode === "compact" ? (
        <BrandRootHover>
          <Box sx={{ width: "80px" }} display="flex" alignItems="center">
            <ReactDemoLogo />
          </Box>

          <Box
            className="sidenavHoverShow"
            sx={{ display: "block", marginTop: "15px" }}
          >
            {children || null}
          </Box>
        </BrandRootHover>
      ) : (
        <>
          <Box display="flex" alignItems="center">
            <ReactDemoLogo />
            <StyledSpan mode={mode}>ReactDemo</StyledSpan>
          </Box>

          <Box
            className="sidenavHoverShow"
            sx={{ display: mode === "compact" ? "none" : "block" }}
          >
            {children || null}
          </Box>
        </>
      )}
    </BrandRoot>
  );
}
