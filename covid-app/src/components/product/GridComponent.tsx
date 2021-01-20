import * as React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ProductDummyData } from "../../global/DummyData/data";
import Card from "./CardComponent";
import Typography from '@material-ui/core/Typography';
import ExpandedCard from "./ExpandedCardComponent";
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
      <Typography>Card Component Demo</Typography>
      {data.map((data) => (
        <Grid item xs={12} sm={6} md={4}>
          <Card {...data}></Card>
        </Grid>
      ))}
        <Typography>Expandable Card Component Demo</Typography>
      {data.map((data) => (
        <Grid item xs={12} sm={6} md={4}>
          <ExpandedCard {...data}></ExpandedCard>
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
