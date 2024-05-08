import React from "react";

// ---swiper----------
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Grid } from "swiper/modules";
// ---swiper----------

//----images datas ----
import { AutoslideImages } from "../datas/imageDatas";

import avacado from "../../../assets/User/products/avacado.png";

//----images datas ----

// ------MUI imports -----------
import { Box, Typography, styled, } from "@mui/material";
import {useTheme}from "@mui/material/styles"
// ------MUI imports -----------

// ------------styling------------
const MainContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    overflowX: "hidden",
    padding:'0 10px',
    marginTop:'15px',
    [theme.breakpoints.up('sm')]:{
        marginTop:'10px'
    }
    
}));
const SubContainer = styled(Box)(({ theme }) => ({}));
const SwiperContent = styled(Box)(({ theme }) => ({
    height: "225.2px",
    width:'168.2px'
}));
const ItemTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color:theme.palette.primary.contrastText
}));
const ItemPrice = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    color:theme.palette.text.secondary,
}));
// ------------styling------------

const AutoSliderSection = () => {
  const theme = useTheme()
    return (
        <MainContainer>
            <Swiper
                modules={[Autoplay]}
                style={{
                  width: "900px", // Default width for larger screens
                  maxWidth: "100%", // Ensure it's not wider than the container
                  margin: "0", // Center the Swiper
                  overflow: "hidden",
              }}
                spaceBetween={5}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true, 
                    waitForTransition: true,
                   }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                   
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}
            >
                {
                    AutoslideImages.map((item)=>(

                        <SwiperSlide style={{
                            width:'225.2px'
                        }} key={item.id}>
                            <SwiperContent>
                                <img src={item.image} alt="" style={{ width:"100%", borderRadius: "20px" }} />
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemPrice>{item.price}</ItemPrice>
                            </SwiperContent>
                        </SwiperSlide>
                       
                    ))
                }
                
               
                {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
        </MainContainer>
    );
};

export default AutoSliderSection;
