import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImgContainer from './contenedorFoto';
function DemoCarousel() {
        return (
            <Carousel>
                <ImgContainer/>
                <ImgContainer/>
                <ImgContainer/>
            </Carousel>
        );
};

export default DemoCarousel;