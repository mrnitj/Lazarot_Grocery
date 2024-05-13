import React from "react";

// mui imports------------
import { Box, Typography, styled, Grid } from "@mui/material";
// mui imports------------

// ---swiper----------
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// ---swiper----------

const MainContainer = styled(Box)(({ theme }) => ({
    marginTop: "11px",
}));
const MainTitle = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "27.5px",
    letterSpacing: "-0.33px",
    color: theme.palette.primary.contrastText,
    marginBottom: "30px",
}));
const SubContainer = styled(Box)(({ theme }) => ({}));

const ImagesContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "7px",
}));
const LargeImage = styled(Box)(({ theme }) => ({
    height: "368px",
    width: "348px",
    objectFit: "contain",
}));
const SubImages = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
}));
const SubImage = styled(Box)(({ theme }) => ({
    width: "320px",
    height: "181px",
}));

const NewArrivals = ({ NewArrivalsDatas }) => {
    return (
        <MainContainer>
            <MainTitle>New Arrivals</MainTitle>
            <SubContainer>
                <Swiper
                    style={{
                        width: "1000px",
                        margin: "0",
                        cursor: "grab",
                    }}
                    spaceBetween={10}
                    slidesPerView={1.5}
                >
                    {/* -------slider */}
                    {NewArrivalsDatas.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ImagesContainer>
                                <LargeImage>
                                    <img
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: "20px",
                                        }}
                                        src={item.img1}
                                        alt=""
                                    />
                                </LargeImage>
                                <SubImages>
                                    <SubImage>
                                        <img
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                borderRadius: "20px",
                                                objectFit: "cover",
                                            }}
                                            src={item.img2}
                                            alt=""
                                        />
                                    </SubImage>
                                    <SubImage>
                                        <img
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                borderRadius: "20px",
                                                objectFit: "cover",
                                            }}
                                            src={item.img3}
                                            alt=""
                                        />
                                    </SubImage>
                                </SubImages>
                            </ImagesContainer>
                        </SwiperSlide>
                    ))}
                    {/* -------slider */}
                </Swiper>
            </SubContainer>
        </MainContainer>
    );
};

export default NewArrivals;
