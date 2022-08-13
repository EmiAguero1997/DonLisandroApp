import Carousel from 'react-material-ui-carousel'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

const MyCarousel = () => {
    const data = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    const sliderItems = data.length > 3 ? 3 : data.length;
    const items = [];

    for (let i = 0; i < data.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.push(
                <Card raised className="Banner" key={i.toString()}>
                    <Grid container style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'transparent' }} pacing={0} className="BannerGrid">
                        {data.slice(i, i + sliderItems).map((index) => {
                            return (
                                <Card key={index} style={{ backgroundColor: 'transparent' }} sx={{ width: 500, height: 500 }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        width="20"
                                        image="favicon.ico"
                                        alt="img"
                                    />
                                </Card>)
                        })}
                    </Grid>
                </Card>
            );
        }
    }


    return (
        <Carousel animation="slide" autoPlay cycleNavigation timeout={100}>
            {items}
        </Carousel>
    )
}

export default MyCarousel;