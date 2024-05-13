import React from "react";

// mui imports ---------------
import { Box, Typography, styled } from "@mui/material";
// mui imports ---------------

const MainContainer = styled(Box)(({ theme }) => ({}));
const MainTitle = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "27.5px",
    letterSpacing: "-0.33px",
    color: theme.palette.primary.contrastText,
    margin: "30px 0",
}));

const SubContainer = styled(Box)(({ theme }) => ({}));

const ItemCards = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
}));

const Card = styled(Box)(({ theme }) => ({
    height: "225.2px",
    width: "168.2px",
}));
const ItemTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    color: theme.palette.primary.contrastText,
}));
const ItemPrice = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    color: theme.palette.text.secondary,
}));

const NewArrivalsMobile = ({ NewArrivalsDatasMobile }) => {
    return (
        <MainContainer>
            <MainTitle>New Arrivals</MainTitle>
            <SubContainer>
                <ItemCards>
                    {NewArrivalsDatasMobile.map((item) => (
                        <Card key={item.id}>
                            <img src={item.image} alt="" style={{ width: "100%", borderRadius: "20px" }} />
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemPrice>{item.price}</ItemPrice>
                        </Card>
                    ))}
                </ItemCards>
            </SubContainer>
        </MainContainer>
    );
};

export default NewArrivalsMobile;
