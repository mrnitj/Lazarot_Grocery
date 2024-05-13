import React from "react";

// mui import -----------------
import { Box, Typography, styled } from "@mui/material";
import CartCard from "../../components/User/Cart/CartCard";
// mui import -----------------

const MainContainer = styled(Box)(({ theme }) => ({}));
const MainTitile = styled(Typography)(({ theme }) => ({
    color:theme.palette.primary.contrastText,
    fontSize:"36px",
    fontWeight:800,
    lineHeight:'45px',
    letterSpacing:'-1.19px'
}));
const SubTitile = styled(Typography)(({ theme }) => ({
    color:theme.palette.primary.contrastText,
    fontSize:'16px',
    fontWeight:400,
    lineHeight:'24px',
    marginTop:'12px'

}));
const SubContainer = styled(Box)(({ theme }) => ({}));

const Cart = () => {
    return (
        <MainContainer>
            <MainTitile>Your Cart</MainTitile>
            <SubTitile>Review and manage products you're purchasing.</SubTitile>
            <SubContainer>
                <CartCard />
            </SubContainer>
        </MainContainer>
    );
};

export default Cart;
