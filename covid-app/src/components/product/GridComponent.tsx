import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ProductDummyData } from "../../global/DummyData/data";
import Card from "./CardComponent";
import ExpandedCard from "./ExpandedCardComponent";
import Carousel from "./CarouselComponent";
import ScrollMenu from "react-horizontal-scrolling-menu";
const fetch = require('node-fetch');
const PRODUCT_LIST_API="https://600ae22b778d1a00177949d7.mockapi.io/api/v1/listProduct";
let data = ProductDummyData;

export const getProductList = async () => {
  try {
    const resp = await fetch(PRODUCT_LIST_API);
    const data =await  resp.json();
    return data;
  } catch (err) {
    console.log("error occur while getProductList" + err);
    throw err;
  }
};

export const horizontalMenuItem = ():React.ReactElement[] =>
 data.map((data) => {
    return <Card key={data.productId} {...data} />;
  });

  function GridComponent() {
  const classes = useStyles();
  let data = ProductDummyData;
  const [productList,setProductList] = useState([{}]);
  useEffect( () => {
    async function fetchProductList() {
      setProductList(await getProductList());
    }
    fetchProductList();
  },[]);

  console.log("return type");
  console.log(typeof horizontalMenuItem);
  const onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  const onLastItemVisible = () => {
    console.log("last item is visible");
  };
  return (
    <>
      <ScrollMenu
              alignCenter={true}
              clickWhenDrag={true}
              data={  data.map((data) => {
                return <Card key={data.productId} {...data} />;
              })}
              dragging={true}
              hideArrows={false}
              hideSingleArrow={false}
              onFirstItemVisible={onFirstItemVisible}
              onLastItemVisible={onLastItemVisible}
              inertiaScrollingSlowdown={100}
      >

      </ScrollMenu>
      <Grid
        container
        spacing={1}
        className={classes.gridContainer}
        justify="center"
      >
        {productList.map((data:any) => (
          <Grid key={data.productId} item xs={6} sm={3} md={2}>
            <Card {...data}></Card>
          </Grid>
        ))}
        {productList.map((data:any) => (
          <Grid key={data.productId} item xs={12} sm={6} md={4}>
            <ExpandedCard {...data}></ExpandedCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const useStyles = makeStyles({
  gridContainer: {
    marginTop:"30px",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
});

export default GridComponent;
