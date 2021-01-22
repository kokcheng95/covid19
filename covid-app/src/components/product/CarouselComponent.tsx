import Carousel from "react-multi-carousel";
import {isMobile} from 'react-device-detect';
import { ProductDummyData } from "../../global/DummyData/data";
import Card from "./CardComponent";
import "react-multi-carousel/lib/styles.css";


function CarouselComponent() {
    console.log("deviceType:"+isMobile);
    let data = ProductDummyData;

  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
      {data.map((data) => (
          <Card key={data.productId} {...data}></Card>
      ))}
    </Carousel>
  );
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default CarouselComponent;
