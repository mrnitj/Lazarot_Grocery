import React, { useState } from "react";

import { useMode } from "../../store/mode-store";

import logoL from "../../assets/User/l.svg";
import logo from "../../assets/User/Vector - 1.svg";
import profile from "../../assets/User/profile.png";
import searchIcon from "../../assets/User/search.png";

import {
    AppBar,
    Avatar,
    Box,
    Toolbar,
    Typography,
    styled,
    InputBase,
    IconButton,
    Slide,
    Paper,
    List,
    ListItem,
    Tabs,
    Tab,
    Button,
    Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const MainContainer = styled(AppBar)(({ theme }) => ({
    padding: "0",
    display: "flex",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    backgroundColor: theme.palette.primary.main,
    borderBottom: "1px solid #E5E8EB",
    position: "static",
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
const Left_Section = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "101px",

    [theme.breakpoints.down("sm")]: {
        gap: "1rem",
    },
}));
const Logo = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "5px",
    "& .MuiTypography-root": {
        fontWeight: "700",
        fontSize: "18px",
        // color: theme.palette.mode === "light" ? "White" : "black",
        // color: theme.palette.secondary.main
        color: theme.palette.primary.contrastText,
    },
}));
const Search = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
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

const Search2 = styled(IconButton)(({ theme }) => ({
    width: "object-fit",
    background: theme.palette.secondary.main,
    display: "none",
    height: "object-fit",
    width: "object-fit",
    [theme.breakpoints.down("sm")]: {
        display: "block",
    },
}));

const Right_Section = styled(Box)({
    display: "flex",
    gap: ".3rem",
    alignItems: "center",
});

const IconButtons = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));

// ------------------------
const NavbarForSinglePage = () => {
    const navigate = useNavigate();

    const theme = useTheme();

    const { mode, setMode, setModeFalse, setModeTrue } = useMode();

    // -----------------sidebar-------------

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        if (value == 0) {
            setModeFalse();
        } else {
            setModeTrue();
        }
        setValue(newValue);
    };

    // -----------------sidebar-------------

    return (
        <>
            <MainContainer elevation={0}>
                <Toolbrs>
                    <Left_Section>
                        <Logo>
                            <Box>
                                <img src={logoL} alt="" />
                                <img src={logo} alt="" />
                            </Box>
                            <Typography>Lazarot Grocery</Typography>
                        </Logo>
                    </Left_Section>
                    <Right_Section>
                        <IconButtons onClick={handleOpen}>
                            <MenuIcon sx={{ color: `${mode ? "#191716" : "white"}`, fontSize: "30px" }} />
                        </IconButtons>
                    </Right_Section>
                </Toolbrs>
            </MainContainer>
            {/* -----------sidebar---------------- */}
            <Slide direction="left" in={open} mountOnEnter unmountOnExit>
                <Paper
                    elevation={3}
                    sx={{
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        p: 2,
                        zIndex: "9999",
                        borderRadius: "0",
                        background: `${mode ? "White" : "Black"}`,
                        color: `${mode ? "black" : "white"}`,
                    }}
                >
                    <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
                    <Box display="flex" flexDirection="column" height="100%">
                        <Box flexGrow={1} mb={2} sx={{ overflow: "auto" }}>
                            <List>
                                <ListItem>
                                    <Tabs
                                        sx={{ margin: "0 auto" }}
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="icon label tabs example"
                                    >
                                        <Tab
                                            sx={{ color: `${mode ? "black" : "white"}` }}
                                            icon={<LightModeOutlinedIcon sx={{ color: `${mode ? "black" : "white"}` }} />}
                                        />
                                        <Tab
                                            sx={{ color: `${mode ? "black" : "white"}` }}
                                            icon={<DarkModeOutlinedIcon sx={{ color: `${mode ? "black" : "white"}` }} />}
                                        />
                                    </Tabs>
                                </ListItem>
                                <ListItem>
                                    <Button
                                        sx={{
                                            color: `${mode ? "black" : "white"}`,
                                            fontSize: "19px",
                                            fontWeight: "700",
                                        }}
                                        startIcon={<ShoppingCartOutlinedIcon sx={{ fontSize: "24px !important" }} />}
                                        onClick={() => navigate("/")}
                                    >
                                        {" "}
                                        Home
                                    </Button>
                                </ListItem>
                                <Divider sx={{ background: `${theme.palette.primary.contrastText}` }} />
                                <ListItem>
                                    <Button
                                        sx={{
                                            color: `${mode ? "black" : "white"}`,
                                            fontSize: "19px",
                                            fontWeight: "700",
                                        }}
                                        startIcon={<ShoppingCartOutlinedIcon sx={{ fontSize: "24px !important" }} />}
                                        onClick={() => navigate("/user/products")}
                                    >
                                        {" "}
                                        Prouducts
                                    </Button>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Paper>
            </Slide>
            {/* -------sidebar--------- */}
        </>
    );
};

export default NavbarForSinglePage;
