import * as React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ProductDummyData } from "../../global/DummyData/data";
import Card from "./CardComponent";

function GridComponent() {
  const classes = useStyles();
  let data = ProductDummyData;

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {data.map((data) => (
        <Grid item xs={12} sm={6} md={4}>
          <Card {...data}></Card>
        </Grid>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles({
  gridContainer: {
    marginTop:"30px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

export default GridComponent;
