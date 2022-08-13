import Carousel from "react-material-ui-carousel";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import styles from "../styles/carousel.module.css";

const MyCarousel = () => {
  const data = [
    {
      name: "Random Name #1",
      photo: "/images/imagesWeb/BP1.jpg",
    },
    {
      name: "Random Name #1",
      photo: "/images/imagesWeb/BP2.jpg",
    },
    {
      name: "Random Name #1",
      photo: "/images/imagesWeb/BP3.jpg",
    },
    {
      name: "Random Name #2",
      photo: "/images/imagesWeb/BP4.jpg",
    },
    {
      name: "Random Name #2",
      photo: "/images/imagesWeb/BP5.jpg",
    },
    {
      name: "Random Name #2",
      photo: "/images/imagesWeb/BP6.jpg",
    },
    {
      name: "Random Name #2",
      photo: "/images/imagesWeb/BP7.jpg",
    },
    {
      name: "Random Name #2",
      photo: "/images/imagesWeb/BP8.jpg",
    },
    {
      name: "Random Name #2",
      photo: "/images/imagesWeb/BP9.jpg",
    },
  ];

  const sliderItems = data.length > 1 ? 1 : data.length;
  const items = [];

  for (let i = 0; i < data.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Card raised className="Banner" key={i.toString()}>
          <Grid container className={styles.container} pacing={0}>
            {data.slice(i, i + sliderItems).map((index) => {
              return (
                <Card key={index} sx={{ width: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="20"
                    image={data[i].photo}
                    alt="img"
                  />
                </Card>
              );
            })}
          </Grid>
        </Card>
      );
    }
  }

  return (
    <Carousel animation="slide" autoPlay cycleNavigation timeout={100} styles={{width:'300px'}} >
      {items}
    </Carousel>
  );
};

export default MyCarousel;
