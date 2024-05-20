import React from "react";

// mui import -----------------
import { Box, Typography, styled } from "@mui/material";
import CartCard from "../../components/User/Cart/CartCard";
import NavbarComp from "../../components/root/NavbarComp";
import { useCart } from "../../store/cart-store";
import CartTotal from "../../components/User/Cart/CartTotal";
// mui import -----------------

const MainContainer = styled(Box)(({ theme }) => ({
    paddingBottom:'2rem'
}));
const Titles = styled(Box)(({ theme }) => ({
    margin: ".5rem 1rem",
}));
const MainTitile = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "36px",
    fontWeight: 800,
    lineHeight: "45px",
    letterSpacing: "-1.19px",
}));
const SubTitile = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    marginTop: "12px",
}));
const SubContainer = styled(Box)(({ theme }) => ({
    padding: "0 5rem",
    minHeight: "50vh",
    borderBottom: "1px solid grey",
    paddingBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
        padding: "0 1rem",
    },
}));
const TotalContainer = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    
}));

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    return (
        <MainContainer>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <NavbarComp />
            </Box>
            <Titles>
                <MainTitile>Your Cart</MainTitile>
                <SubTitile>Review and manage products you're purchasing.</SubTitile>
            </Titles>
            <SubContainer>
                <CartCard cart={cart} removeFromCart={removeFromCart} />
            </SubContainer>
            <TotalContainer><CartTotal/></TotalContainer>
        </MainContainer>
    );
};

export default Cart;
