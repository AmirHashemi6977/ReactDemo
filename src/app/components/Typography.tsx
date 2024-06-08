import { Box, styled } from "@mui/material";
import clsx from "clsx";

const StyledBox = styled(Box)(({ ellipsis }: any) => ({
  textTransform: "none",
  ...(ellipsis && {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
}));

/**
 * @typedef {import("@mui/material").BoxProps} Other
 * @param {Other & {ellipsis: boolean}}
 * @returns {JSX.Element}
 */
export const H5 = ({ children, className, ellipsis, ...props }: any) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h5"
      fontSize="14px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

/**
 * @typedef {import("@mui/material").BoxProps} Other
 * @param {Other & {ellipsis: boolean}}
 * @returns {JSX.Element}
 */
export const H6 = ({ children, className, ellipsis, ...props }: any) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h6"
      fontSize="13px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

/**
 * @typedef {import("@mui/material").BoxProps} Other
 * @param {Other & {ellipsis: boolean}}
 * @returns {JSX.Element}
 */
export const Paragraph = ({ children, className, ellipsis, ...props }: any) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="p"
      fontSize="14px"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

/**
 * @typedef {import("@mui/material").BoxProps} Other
 * @param {Other & {ellipsis: boolean}}
 * @returns {JSX.Element}
 */
export const Small = ({ children, className, ellipsis, ...props }: any) => {
  return (
    <StyledBox
      fontSize="12px"
      fontWeight="500"
      lineHeight="1.5"
      component="small"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

/**
 * @typedef {import("@mui/material").BoxProps} Other
 * @param {Other & {ellipsis: boolean}}
 * @returns {JSX.Element}
 */
export const Span = ({ children, className, ellipsis, ...props }: any) => {
  return (
    <StyledBox
      component="span"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

/**
 * @typedef {import("@mui/material").BoxProps} Other
 * @param {Other & {ellipsis: boolean}}
 * @returns {JSX.Element}
 */
export const Tiny = ({ children, className, ellipsis, ...props }: any) => {
  return (
    <StyledBox
      fontSize="10px"
      lineHeight="1.5"
      component="small"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
