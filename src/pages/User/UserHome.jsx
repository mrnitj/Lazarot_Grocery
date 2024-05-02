import { Box, styled } from "@mui/material";
import React from "react";
import MainSection from "../../components/User/Home/MainSection";

const Maincontainer = styled(Box)(({ theme }) => ({
    width: "100%",
}));
const Subcontainer = styled(Box)(({ theme }) => ({
    display: "flex",
}));
const HomepageContent = styled(Box)(({ theme }) => ({}));

const UserHome = () => {
    return (
        <Maincontainer>
            <MainSection />
        </Maincontainer>
    );
};

export default UserHome;
