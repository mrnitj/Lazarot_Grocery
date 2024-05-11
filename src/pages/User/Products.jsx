import { Box, styled } from "@mui/material";
import React from "react";
import ProductCard from "../../components/User/Products/ProductCard";
import NavbarForSinglePage from "../../components/root/NavbarForSinglePage";
const MainContainer = styled(Box)(({ theme }) => ({}));
const SubContainer = styled(Box)(({ theme }) => ({}));
const Products = () => {
    return (
        <MainContainer>
           <Box sx={{ position: "sticky", top: "0",display: { xs: "block", md: "none" }, zIndex:2 }}>
                <NavbarForSinglePage />
            </Box>
            <ProductCard />
        </MainContainer>
    );
};

export default Products;
