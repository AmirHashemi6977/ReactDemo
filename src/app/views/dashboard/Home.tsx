import { Fragment } from "react";
import { Grid, styled } from "@mui/material";

import ComplexCard from "../../components/ComplexCard";

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

export default function Home() {
  return (
    <Fragment>
      <ContentBox>
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <ComplexCard></ComplexCard>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
