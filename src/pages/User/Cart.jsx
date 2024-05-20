import React from "react";

// mui import -----------------
import { Box, Typography, styled } from "@mui/material";
import CartCard from "../../components/User/Cart/CartCard";
import NavbarComp from "../../components/root/NavbarComp";
import { useCart } from "../../store/cart-store";
// mui import -----------------

const MainContainer = styled(Box)(({ theme }) => ({}));
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
    [theme.breakpoints.down("sm")]: {
        padding: "0 1rem",
    },
}));

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    return (
        <MainContainer>
            <Box sx={{display:{xs:'block', sm:'none'}}}>
                <NavbarComp />
            </Box>
            <Titles>
                <MainTitile>Your Cart</MainTitile>
                <SubTitile>Review and manage products you're purchasing.</SubTitile>
            </Titles>
            <SubContainer>
                <CartCard cart={cart} removeFromCart={removeFromCart} />
            </SubContainer>
        </MainContainer>
    );
};

export default Cart;
