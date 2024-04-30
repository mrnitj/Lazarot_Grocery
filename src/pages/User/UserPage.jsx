import { Box, styled } from "@mui/material";
import React from "react";
import NavbarComp from "../../components/root/NavbarComp";
import SidebarComp from "../../components/root/SidebarComp";

const Maincontainer = styled(Box)(({ theme }) => ({}));
const Subcontainer = styled(Box)(({ theme }) => ({
    display: "flex",
}));
const HomepageContent = styled(Box)(({ theme }) => ({}));

const UserPage = () => {
    return (
            <Maincontainer>
                <NavbarComp />
                <Subcontainer>
                    <SidebarComp />
                    <HomepageContent>
                    </HomepageContent>
                </Subcontainer>
            </Maincontainer>
    );
};

export default UserPage;
