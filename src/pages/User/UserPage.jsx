import { Box, styled } from "@mui/material";
import React from "react";
import NavbarComp from "../../components/root/NavbarComp";
import SidebarComp from "../../components/root/SidebarComp";
import UserHome from "./UserHome";
import { useTheme, } from "@mui/material/styles";

const Maincontainer = styled(Box)(({ theme }) => ({}));
const Subcontainer = styled(Box)(({ theme }) => ({
    display: "flex",
}));
const HomepageContent = styled(Box)(({ theme }) => ({}));

const UserPage = () => {
    const theme = useTheme();
    console.log(theme.breakpoints.down("sm"));
    return (
        <Maincontainer>
            <Box sx={{ position: "sticky", top: "0" }}>
                <NavbarComp />
            </Box>
            <Subcontainer>
                <Box sx={{width:'100%' ,display:{xs:'none', md:'block'}}}><SidebarComp/></Box>
                <Box sx={{width:'100%', display:{xs:'block', md:'none'}}}><UserHome/></Box>
                {/* <SidebarComp/> */}
                {/* <UserHome/> */}
                {/* hi */}
            </Subcontainer>
        </Maincontainer>
    );
};

export default UserPage;
