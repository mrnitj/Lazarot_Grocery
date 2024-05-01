import { Box, Grid, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

// images-------
import section11 from "../../../assets/User/section11.png";
import section1 from "../../../assets/User/section1.png";

const Maincontainer = styled(Box)(({ theme }) => ({}));
const GridContainer = styled(Grid)(({ theme }) => ({}));
const GridItem = styled(Grid)(({ theme }) => ({}));
const ImageContainer = styled(Box)(({ theme }) => ({
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
    height: "242px",
}));
const Titles = styled(Box)(({ theme }) => ({}));
const Buttons = styled(Box)(({ theme }) => ({}));

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
                                    fontSize: "48px",
                                    // background:'red',
                                    maxWidth: "478px",
                                    lineHeight: "60px",
                                    fontWeight: 800,
                                    color: `${theme.palette.primary.contrastText}`,
                                }}
                            >
                                MEAL PLAN WITH LAZAROT STORE
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    color: `${theme.palette.primary.contrastText}`,
                                }}
                            >
                                MAKING THE MOST OF YOUR GROCERY
                            </Typography>
                        </Titles>
                        <Buttons></Buttons>
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet fugit, soluta eaque quae cum ratione enim? Reprehenderit vel incidunt cupiditate eum excepturi dicta expedita quo unde similique, a ex vitae magnam sunt quia accusamus id, esse dolorem quae modi maxime architecto quod aperiam laboriosam. Quaerat dolores corporis error quasi, consequuntur ipsam! */}
                    </TextContainer>
                </GridItem>
            </GridContainer>
        </Maincontainer>
    );
};

export default MainSection;
