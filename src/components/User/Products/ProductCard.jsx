import React from "react";

import fish from "../../../assets/User/products/newArrivals/fish.png";
import searchIcon from "../../../assets/User/search.png";

// mui imports -------------
import { Box, Card, Grid, InputBase, Typography, styled } from "@mui/material";
// mui imports -------------

const MainContainer = styled(Box)(({ theme }) => ({
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    zIndex: 1,
}));
// const SubContainer = styled(Box)(({theme})=>({}))
// const GridContainer = styled(Grid)(({theme})=>({}))
// const GridItem = styled(Grid)(({theme})=>({}))
const Cards = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    [theme.breakpoints.up("md")]: {
        paddingLeft: "3rem",
    },
    [theme.breakpoints.down("md")]: {
        paddingLeft: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
        // paddingLeft:'.5rem'
        padding: "0",
        justifyContent: "center",
    },
}));

const ProductCards = styled(Box)(({ theme }) => ({
    height: "225.2px",
    width: "168.2px",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.02)",
    },
    "&:active": {
        transform: "scale(1)",
    },
}));
const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.primary.contrastText,
}));
const CardPrice = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    color: theme.palette.text.secondary,
}));

const Search = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    width: "260px",
    height: "40px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 1rem",
    margin: "0 auto",
    zIndex: 1,
}));

const ProductCard = ({ productDatas }) => {
    console.log("productz", productDatas);

    return (
        <MainContainer>
            <Search>
                <span>
                    <img src={searchIcon} alt="" />
                </span>
                <InputBase placeholder="Search..." />
            </Search>
            <Cards>
                {productDatas.map((item) => (
                    <ProductCards key={item.id}>
                        <img src={item.image} alt="" style={{ width: "100%", borderRadius: "20px" }} />
                        <CardTitle>{item.title}</CardTitle>
                        <CardPrice>{item.price}</CardPrice>
                    </ProductCards>
                ))}
            </Cards>
        </MainContainer>
    );
};

export default ProductCard;
