import React from "react";
import { Box, styled } from "@mui/material";
import ViewCard from "../../components/User/ProductView/ViewCard";
import { useParams } from "react-router-dom";
import { productDatas } from "../../components/User/datas/imageDatas";

const MainContainer = styled(Box)(({ theme }) => ({}));

const ProductView = () => {
    const { id } = useParams();

    const Viewproduct = productDatas?.filter((item) => item.id == id);
    return (
        <MainContainer>
            <ViewCard Viewproduct={Viewproduct} />
        </MainContainer>
    );
};

export default ProductView;
