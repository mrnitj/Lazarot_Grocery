import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Avatar } from "@mui/material";

import UserHome from "../../pages/User/UserHome";
import Cart from "../../pages/User/Cart";
// ------react icons---------
import { GoHomeFill } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
// ----------------
import logo from "../../assets/User/logo.png";
import Products from "../../pages/User/Products";
import NavbarComp from "./NavbarComp";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",

    "& .MuiDrawer-paper ": {
        backgroundColor: theme.palette.primary.main,
        padding: "1rem 0",
        marginTop: "65px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "57.5px",
        },
    },

    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function SidebarComp() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [activeComponent, setActiveComponent] = React.useState("UserHome");

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <>
            <Box sx={{ position: "sticky", top: "0",zIndex:99 }}>
                <NavbarComp />
            </Box>
            <Box sx={{ display: "flex", width: "100%", height: "auto" }}>
                <Drawer variant="permanent" open={open}>
                    <List disablePadding sx={{ padding: "0" }}>
                        <ListItem>
                            <ListItemButton
                                onClick={handleDrawerOpen}
                                sx={{
                                    height: 48,
                                    justifyContent: open ? "initial" : "center",
                                    overflow: "hidden",
                                    padding: "4px 20px",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar>
                                        <img src={logo} alt="" />
                                    </Avatar>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        display: `${open ? "flex" : "none"}`,
                                        flexDirection: "column",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: `${theme.palette.text.primary}`,
                                            fontSize: "16px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Lazarot
                                    </span>
                                    <span
                                        style={{
                                            color: `${theme.palette.text.secondary}`,
                                            fontSize: "14px",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Your local store
                                    </span>
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: "0px 16px" }}>
                            <ListItemButton
                                onClick={() => handleComponentChange("UserHome")}
                                sx={{
                                    height: 48,
                                    justifyContent: open ? "initial" : "center",
                                    overflow: "hidden",
                                    borderRadius: "50px",
                                    padding: "4px 20px",
                                    backgroundColor:
                                        activeComponent === "UserHome" ? theme.palette.secondary.main : "transparent",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar sx={{ backgroundColor: "transparent" }}>
                                        <GoHomeFill />
                                    </Avatar>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        display: `${open ? "flex" : "none"}`,
                                        flexDirection: "column",
                                    }}
                                >
                                    Home
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: "0px 16px" }}>
                            <ListItemButton
                                onClick={() => handleComponentChange("Products")}
                                sx={{
                                    height: 48,
                                    justifyContent: open ? "initial" : "center",
                                    overflow: "hidden",
                                    borderRadius: "50px",
                                    padding: "4px 20px",
                                    backgroundColor:
                                        activeComponent === "Products" ? theme.palette.secondary.main : "transparent",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar sx={{ backgroundColor: "transparent" }}>
                                        <TfiMenuAlt />
                                    </Avatar>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        display: `${open ? "flex" : "none"}`,
                                        flexDirection: "column",
                                    }}
                                >
                                    Products
                                </Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{ padding: "0px 16px" }}>
                            <ListItemButton
                                onClick={() => handleComponentChange("Cart")}
                                sx={{
                                    height: 48,
                                    justifyContent: open ? "initial" : "center",
                                    overflow: "hidden",
                                    borderRadius: "50px",
                                    padding: "4px 20px",
                                    backgroundColor:
                                        activeComponent === "Cart" ? theme.palette.secondary.main : "transparent",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar sx={{ backgroundColor: "transparent" }}>
                                        <BsCart3 />
                                    </Avatar>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        display: `${open ? "flex" : "none"}`,
                                        flexDirection: "column",
                                    }}
                                >
                                    Cart
                                </Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{ padding: "0px 16px" }}>
                            <ListItemButton
                                onClick={() => handleComponentChange("ContactUs")}
                                sx={{
                                    height: 48,
                                    justifyContent: open ? "initial" : "center",
                                    overflow: "hidden",
                                    borderRadius: "50px",
                                    padding: "4px 20px",
                                    backgroundColor:
                                        activeComponent === "ContactUs" ? theme.palette.secondary.main : "transparent",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar sx={{ backgroundColor: "transparent" }}>
                                        <AiOutlineMessage />
                                    </Avatar>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        display: `${open ? "flex" : "none"}`,
                                        flexDirection: "column",
                                    }}
                                >
                                    contact us
                                </Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{ padding: "0px 16px" }}>
                            <ListItemButton
                                onClick={() => handleComponentChange("Account")}
                                sx={{
                                    height: 48,
                                    justifyContent: open ? "initial" : "center",
                                    overflow: "hidden",
                                    borderRadius: "50px",
                                    padding: "4px 20px",
                                    backgroundColor:
                                        activeComponent === "Account" ? theme.palette.secondary.main : "transparent",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar sx={{ backgroundColor: "transparent" }}>
                                        <RiAccountCircleLine />
                                    </Avatar>
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        display: `${open ? "flex" : "none"}`,
                                        flexDirection: "column",
                                    }}
                                >
                                    Account
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>

                <Box component="main" sx={{ flex: 1, p: 3, background: "", height: "auto" }}>
                    {activeComponent === "UserHome" ? (
                        <UserHome />
                    ) : activeComponent === "Cart" ? (
                        <Cart />
                    ) : activeComponent === "Products" ? (
                        <Products />
                    ) : (
                        "hi"
                    )}
                </Box>
            </Box>
        </>
    );
}
