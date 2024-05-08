import { Box, styled } from "@mui/material";
import React from "react";
import MainSection from "../../components/User/Home/MainSection";
import AutoSliderSection from "../../components/User/Home/AutoSliderSection";

const Maincontainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display:'flex',
    flexDirection:'column'
}));
const Subcontainer = styled(Box)(({ theme }) => ({
    display: "flex",
}));
const HomepageContent = styled(Box)(({ theme }) => ({}));

const UserHome = () => {
    return (
        <Maincontainer>
            <MainSection />
            <AutoSliderSection/>
        </Maincontainer>
    );
};

export default UserHome;
