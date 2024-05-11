import { Box, styled } from "@mui/material";
import React from "react";
import ProductCard from "../../components/User/Products/ProductCard";
import NavbarForSinglePage from "../../components/root/NavbarForSinglePage";
import { productDatas } from "../../components/User/datas/imageDatas";
const MainContainer = styled(Box)(({ theme }) => ({}));
const SubContainer = styled(Box)(({ theme }) => ({}));

const Products = () => {

    return (
        <MainContainer>
            <Box sx={{ position: "sticky", top: "0", display: { xs: "block", md: "none" }, zIndex: 9 }}>
                <NavbarForSinglePage />
            </Box>
            <ProductCard productDatas={productDatas}/>
        </MainContainer>
    );
};

export default Products;
