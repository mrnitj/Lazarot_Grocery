import { Box, Grid, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

// images-------
import section11 from "../../../assets/User/section11.png";
import section1 from "../../../assets/User/section1.png";
import { Coffee } from "@mui/icons-material";

const Maincontainer = styled(Box)(({ theme }) => ({}));
const GridContainer = styled(Grid)(({ theme }) => ({
    height: "fit-content",
}));
const GridItem = styled(Grid)(({ theme }) => ({
    height: "fit-content",
}));
const ImageContainer = styled(Box)(({ theme }) => ({
    borderRadius: "10px",
    height: "242px",
    background: `url(${section11})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
        background: `url(${section1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
}));
const TextContainer = styled(Box)(({ theme }) => ({
    height: "fit-content",
}));
const Titles = styled(Box)(({ theme }) => ({}));
const Buttons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "11.5px",
    marginTop: "32px",
    [theme.breakpoints.down("lg")]: {
        marginTop: "23px",
    },

    [theme.breakpoints.down("sm")]: {
        marginTop: "15px",
    },
}));
const Button = styled(Box)(({ theme }) => ({
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.24px",
    padding: "12px 20px",
    borderRadius: "50px",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        fontSize: "15px",
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        padding: "10px 18px",
    },
}));
const SliderContainer = styled(Box)(({ theme }) => ({
    overflowX: "auto",
    padding: "12px 0",
    width: "100%",
    marginTop:'20px'

}));
const SliderSubContiner = styled(Box)(({ theme }) => ({
    // background: "grey",
    width: "fit-content",
    display: "flex",
    gap: "12px",
}));
const Chips = styled(Box)(({ theme }) => ({
    height: "32px",
    width: "fit-content",
    color: "white",
    background: "#1F1F1F",
    display: "flex",
    alignItems: "center",
    borderRadius: "50px",
    padding: "5px 16px",
    gap: "5px",
}));

const MainSection = () => {
    const theme = useTheme();

    return (
        <Maincontainer>
            <GridContainer container spacing={2}>
                <GridItem item xs={12} sm={6}>
                    <ImageContainer>{/* <img src={section1} alt="" /> */}</ImageContainer>
                </GridItem>
                <GridItem item xs={12} sm={6}>
                    <TextContainer>
                        <Titles>
                            <Typography
                                sx={{
                                    fontSize: { xs: "27px", sm: "44px", lg: "48px" },

                                    // background:'red',
                                    maxWidth: "478px",
                                    lineHeight: { sm: "53px", lg: "60px" },
                                    fontWeight: 800,
                                    color: `${theme.palette.primary.contrastText}`,
                                }}
                            >
                                MEAL PLAN WITH LAZAROT STORE
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", sm: "14px", lg: "16px" },
                                    fontWeight: 400,
                                    lineHeight: { xs: "25px", sm: "24px" },
                                    color: `${theme.palette.primary.contrastText}`,
                                }}
                            >
                                MAKING THE MOST OF YOUR GROCERY
                            </Typography>
                        </Titles>
                        <Buttons>
                            <Button
                                sx={{
                                    backgroundColor: `${theme.palette.success.main}`,
                                    color: `${theme.palette.primary.main}`,
                                }}
                            >
                                Start Shopping
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: `${theme.palette.secondary.main}`,
                                    color: `${theme.palette.primary.contrastText}`,
                                }}
                            >
                                Weekly Deals
                            </Button>
                        </Buttons>
                    </TextContainer>
                </GridItem>
            </GridContainer>
            <SliderContainer>
                <SliderSubContiner>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                    <Chips>
                        <Coffee sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "14px" }}>Coffee</Typography>
                    </Chips>
                </SliderSubContiner>
            </SliderContainer>
        </Maincontainer>
    );
};

export default MainSection;
