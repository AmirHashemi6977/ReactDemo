import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonBase, Icon, Box, styled } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import { sideNavColor } from "../../utils/colorPalette";

// STYLED COMPONENTS
const NavExpandRoot = styled("div")(({ theme }) => ({
  "& .expandIcon": {
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(90deg)",
  },
  "& .collapseIcon": {
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(0deg)",
  },
  "& .expansion-panel": {
    overflow: "hidden",
    transition: "max-height 0.3s cubic-bezier(0, 0, 0.2, 1)",
  },
  "& .highlight": {
    background: theme.palette.primary.main,
  },
  "&.compactNavItem": {
    width: 44,
    overflow: "hidden",
    justifyContent: "center !important",
    "& .itemText": { display: "none" },
    "& .itemIcon": { display: "none" },
  },
}));

const BaseButton = styled(ButtonBase)(({ theme }) => ({
  height: 44,
  width: "100%",
  whiteSpace: "pre",
  overflow: "hidden",
  paddingRight: "16px",
  borderRadius: "4px",
  marginBottom: "8px",
  display: "flex",
  justifyContent: "space-between !important",
  //color: theme.palette.text.primary,
  color: "white",
  "&:hover": { background: "rgba(255, 255, 255, 0.08)" },
  "& .icon": {
    width: 36,
    fontSize: "18px",
    paddingLeft: "16px",
    paddingRight: "16px",
    verticalAlign: "middle",
  },
}));

const BulletIcon = styled("div")(({ theme }) => ({
  width: 4,
  height: 4,
  color: "inherit",
  overflow: "hidden",
  marginLeft: "20px",
  marginRight: "8px",
  borderRadius: "300px !important",
  //background: theme.palette.text.primary,
  background: "white",
}));

const ItemText = styled("span")(() => ({
  fontFamily: "Vazirmatn",
  fontSize: "0.875rem",
  paddingLeft: "0.8rem",
  verticalAlign: "middle",
}));

export default function ReactDemoVerticalNavExpansionPanel({
  item,
  children,
  mode,
}: any) {
  const [collapsed, setCollapsed] = useState(true);
  const elementRef = useRef<HTMLInputElement | null>(null);
  const componentHeight = useRef(0);
  const { pathname } = useLocation();
  const { name, icon, iconText } = item;

  const handleClick = () => {
    componentHeight.current = 0;
    calculateHeight(elementRef.current);
    setCollapsed(!collapsed);
  };

  const calculateHeight = useCallback((node: any) => {
    if (node.name !== "child") {
      for (let child of node.children) {
        calculateHeight(child);
      }
    }

    if (node.name === "child") componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height
    return;
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    calculateHeight(elementRef.current);

    let elementRefChildren = elementRef.current?.children!;
    // OPEN DROPDOWN IF CHILD IS ACTIVE
    for (let child of elementRefChildren) {
      if (child.getAttribute("href") === pathname) {
        setCollapsed(false);
      }
    }
  }, [pathname, calculateHeight]);

  return (
    <NavExpandRoot>
      <BaseButton
        className={clsx({
          "has-submenu compactNavItem": true,
          compactNavItem: mode === "compact",
          open: !collapsed,
        })}
        onClick={handleClick}
        sx={{ paddingRight: 0 }}
      >
        <Box display="flex" alignItems="center">
          {icon && <Icon className="icon">{icon}</Icon>}
          {iconText && <BulletIcon />}
          {mode !== "compact" && (
            <ItemText className="sidenavHoverShow">{name}</ItemText>
          )}
        </Box>

        <div
          className={clsx({
            sidenavHoverShow: true,
            collapseIcon: collapsed,
            expandIcon: !collapsed,
          })}
        >
          <ChevronLeft fontSize="small" sx={{ verticalAlign: "middle" }} />
        </div>
      </BaseButton>

      <div
        ref={elementRef}
        className="expansion-panel submenu"
        style={
          collapsed
            ? { maxHeight: "0px" }
            : { maxHeight: componentHeight.current + "px" }
        }
      >
        {children}
      </div>
    </NavExpandRoot>
  );
}
