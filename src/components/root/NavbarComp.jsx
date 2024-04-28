import React from "react";

// ---zustand
import { useMode } from "../../store/mode-store";

import { AppBar, Avatar, Box, Toolbar, Typography, styled, InputBase, IconButton } from "@mui/material";

import logoL from "../../assets/User/l.svg";
import logo from "../../assets/User/Vector - 1.svg";
import profile from "../../assets/User/profile.png";

import searchIcon from "../../assets/User/search.png";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Maincontainer = styled(AppBar)(({ theme }) => ({
    height: "65px",
    padding: "0",
    display: "flex",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    background: theme.palette.mode === "light" ? "black" : "white",
    borderBottom: "1px solid #E5E8EB",
    [theme.breakpoints.down("sm")]: {
        padding: "0 1rem",
    },
}));
const Toolbrs = styled(Toolbar)(({ theme }) => ({
    padding: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
}));
const Left_Section = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "101px",
});
const Logo = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "5px",
    "& .MuiTypography-root": {
        fontWeight: "700",
        fontSize: "18px",
        color: theme.palette.mode === "light" ? "White" : "black",
    },
}));

const Search = styled(Box)(({ theme }) => ({
    background: theme.palette.mode === "light" ? "#1F1F1F" : "#EDEDED",
    color: theme.palette.mode === "light" ? "white" : "black",
    width: "260px",
    height: "40px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 1rem",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const Right_Section = styled(Box)({
    display: "flex",
    gap: ".3rem",
    alignItems: "center",
});

const Avatars = styled(Avatar)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const IconButtons = styled(Box)(({ theme }) => ({
    display: "none",

    [theme.breakpoints.down("sm")]: {
        display: "block",
    },
}));

const NavbarComp = () => {
    const { mode, setMode } = useMode();

    return (
        <Maincontainer elevation={0}>
            <Toolbrs>
                <Left_Section>
                    <Logo>
                        <Box>
                            <img src={logoL} alt="" />
                            <img src={logo} alt="" />
                        </Box>
                        <Typography>Lazarot Grocery</Typography>
                    </Logo>
                    <Search>
                        <span>
                            <img src={searchIcon} alt="" />
                        </span>
                        <InputBase sx={{ color: `${mode ? "black" : "white"}` }} placeholder="Search" />
                    </Search>
                </Left_Section>
                <Right_Section>
                    <Avatars onClick={setMode} sx={{ bgcolor: `${mode ? "#D9D9D9" : "#333333"}` }}>
                        {mode ? (
                            <DarkModeOutlinedIcon sx={{ color: `${mode ? "#191716" : "white"}` }} />
                        ) : (
                            <LightModeOutlinedIcon sx={{ color: `${mode ? "#191716" : "white"}` }} />
                        )}
                    </Avatars>
                    <Avatars sx={{ bgcolor: `${mode ? "#D9D9D9" : "#333333"}` }}>
                        <ShoppingCartOutlinedIcon sx={{ color: `${mode ? "#191716" : "white"}` }} />
                    </Avatars>
                    <Avatar>
                        <img src={profile} alt="profile" />
                    </Avatar>
                    <IconButtons>
                        <MenuIcon sx={{ color: `${mode ? "#191716" : "white"}`, fontSize: "30px" }} />
                    </IconButtons>
                </Right_Section>
            </Toolbrs>
        </Maincontainer>
    );
};

export default NavbarComp;
