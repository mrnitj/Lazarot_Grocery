import React from "react";

import fish from "../../../assets/User/products/newArrivals/fish.png";
import { useCart } from "../../../store/cart-store";

// ------Mui Imports ---------
import { Box, Grid, IconButton, Rating, Typography, styled } from "@mui/material";
// ------Mui Imports ---------
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const MainContainer = styled(Box)(({ theme }) => ({}));
const SubContainer = styled(Box)(({ theme }) => ({}));
const GridContainer = styled(Grid)(({ theme }) => ({}));
const GridItem = styled(Grid)(({ theme }) => ({}));
const RightSide = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}));

const Desc = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));
const LeftSide = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));
const Title = styled(Box)(({ theme }) => ({
    fontSize: "35px",
    color: theme.palette.primary.contrastText,
}));
const Ratings = styled(Box)(({ theme }) => ({
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
}));
const RatingText = styled(Box)(({ theme }) => ({
    fontSize: "12px",
    color: theme.palette.primary.contrastText,
}));

const PriceAndQty = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5rem",
    marginTop: "30px",
}));
const Price = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));
const Quantity = styled(Box)(({ theme }) => ({
    display: "flex",
    alignContent: "center",
    fontSize: "20px",
    color: theme.palette.primary.contrastText,
    width: "fit-content",
    padding: "0 2px",
}));
const QTBtn = styled(IconButton)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    color: theme.palette.primary.contrastText,
}));
const QTInput = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
}));
const Button = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    background: "grey",
    padding: "6px 10px",
    fontSize: "16px",
    marginTop: "20px",
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
}));

const ViewCard = ({ Viewproduct }) => {
    const { cart, setCart } = useCart();
    // console.log('productDatas',Viewproduct);
    console.log("cartiteeeem", cart);
    return (
        <MainContainer>
            <SubContainer p={2}>
                <GridContainer container spacing={2} p={1} justifyContent={"center"}>
                    <GridItem item xs={12} md={3}>
                        <RightSide>
                            <img
                                src={Viewproduct[0]?.image}
                                alt=""
                                style={{ height: "300px", width: "100%", borderRadius: "20px", objectFit: "cover" }}
                            />
                            <Desc>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora voluptatibus neque eum
                                reprehenderit, qui inventore dicta ea minus deserunt culpa!
                            </Desc>
                        </RightSide>
                    </GridItem>
                    <GridItem item xs={12} md={6}>
                        <LeftSide>
                            <Title>{Viewproduct[0]?.title}</Title>
                            <Ratings>
                                <Rating
                                    name="half-rating"
                                    defaultValue={3.5}
                                    precision={0.5}
                                    max={5}
                                    readOnly
                                    size="small"
                                />
                                <RatingText>9 rating</RatingText>
                            </Ratings>
                            <PriceAndQty>
                                <Price>{Viewproduct[0]?.price}</Price>
                                <Quantity>
                                    <QTBtn>
                                        <FaMinus style={{ fontSize: "15px" }} />
                                    </QTBtn>
                                    <QTInput>1</QTInput>
                                    <QTBtn>
                                        <FaPlus style={{ fontSize: "15px" }} />
                                    </QTBtn>
                                </Quantity>
                            </PriceAndQty>
                            <Button onClick={() => setCart(Viewproduct[0])}>Add To Cart</Button>
                        </LeftSide>
                    </GridItem>
                </GridContainer>
            </SubContainer>
        </MainContainer>
    );
};

export default ViewCard;
