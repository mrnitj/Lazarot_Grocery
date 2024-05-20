import React from "react";

import fish from "../../../assets/User/products/newArrivals/fish.png";

import { Box, Card, Grid, IconButton, Typography, styled } from "@mui/material";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const MainContainer = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    marginTop: "16px",
    [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
    },
}));
const SubContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: ".8rem",
}));
const GridContainer = styled(Grid)(({ theme }) => ({}));
const GridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

const ItemCard = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    borderBottom: "1px solid grey",
    paddingBottom: "10px",
}));
const ItemDetails = styled(Box)(({ theme }) => ({}));
const ItemTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
}));
const ItemDesc = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
}));
const ItemPrice = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
}));

const Quantity = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

const Button = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    background: "lightgrey",
}));
const Count = styled(Box)(({ theme }) => ({
    padding: "0 10px",
}));

const CartCard = ({ cart, removeFromCart }) => {
    return (
        <MainContainer>
            <SubContainer>
                {cart.map((item) => (
                    <ItemCard>
                        <img src={item.image} alt="" style={{ height: "75px", width: "75px", borderRadius: "10px" }} />
                        <GridContainer container>
                            <GridItem item xs={12} sm={9}>
                                <ItemDetails>
                                    <ItemTitle>{item.title}</ItemTitle>
                                    <ItemDesc>Delicious sauce to complement your meals.</ItemDesc>
                                    <ItemPrice>{item.price}</ItemPrice>
                                </ItemDetails>
                            </GridItem>
                            <GridItem item xs={12} sm={3} sx={{ justifyContent: { xs: "flex-end" } }}>
                                <Quantity>
                                    <Button>
                                        <FaMinus style={{ fontSize: "15px" }} />
                                    </Button>
                                    <Count>1</Count>
                                    <Button>
                                        <FaPlus style={{ fontSize: "15px" }} />
                                    </Button>
                                </Quantity>
                            </GridItem>
                        </GridContainer>
                    </ItemCard>
                ))}
            </SubContainer>
        </MainContainer>
    );
};

export default CartCard;
