import { Box, styled } from "@mui/material";
import React from "react";
import ProductCard from "../../components/User/Products/ProductCard";
import NavbarComp from "../../components/root/NavbarComp";

const MainContainer = styled(Box)(({ theme }) => ({}));
const SubContainer = styled(Box)(({ theme }) => ({}));
const Products = () => {
    return (
        <MainContainer>
           <Box sx={{ position: "sticky", top: "0" }}>
                <NavbarComp />
            </Box>
            <ProductCard />
        </MainContainer>
    );
};

export default Products;
