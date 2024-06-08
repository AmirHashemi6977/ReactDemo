import { useEffect, useState } from "react";
import {  styled } from "@mui/material";
import { Breadcrumb } from "../../components";

// STYLED COMPONENT
const ProgressRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px"
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px"
    }
  },
  "& .progress": {
    margin: theme.spacing(2)
  }
}));

const AppProgress = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ProgressRoot>
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Prgress" }]}
        />
      </div>
 
    </ProgressRoot>
  );
};

export default AppProgress;
