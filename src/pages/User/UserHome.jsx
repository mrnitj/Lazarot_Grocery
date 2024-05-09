import { Box, styled } from "@mui/material";
import React from "react";
import MainSection from "../../components/User/Home/MainSection";
import AutoSliderSection from "../../components/User/Home/AutoSliderSection";
import NewArrivals from "../../components/User/Home/NewArrivals";
import NewArrivalsMobile from "../../components/User/Home/NewArrivalsMobile";
import { NewArrivalsDatas, NewArrivalsDatasMobile } from "../../components/User/datas/imageDatas";

const Maincontainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
}));
const Subcontainer = styled(Box)(({ theme }) => ({
    display: "flex",
}));
const HomepageContent = styled(Box)(({ theme }) => ({}));

const UserHome = () => {
    return (
        <Maincontainer>
            <MainSection />
            <AutoSliderSection  />
            <Box sx={{display:{xs:'none', sm:'block' , width:'100%', overflowX:'hidden'}}}>
                <NewArrivals NewArrivalsDatas={NewArrivalsDatas} />
            </Box>
            <Box sx={{display:{xs:'block', sm:'none'}}}>
                <NewArrivalsMobile NewArrivalsDatasMobile={NewArrivalsDatasMobile} />
            </Box>
        </Maincontainer>
    );
};

export default UserHome;
