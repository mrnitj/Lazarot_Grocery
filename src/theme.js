import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0D0D0D",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#1F1F1F",
            light: "#333333",
            contrastText: "#FFFFFF",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#6B6B6B",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFFFFF",
            contrastText: "#0D0D0D",
        },
        secondary: {
            main: "#EDEDED",
            light: "#D9D9D9",
            contrastText: "#191716",
        },
        text: {
            primary: "#000000",
            secondary: "#6B6B6B",
        },
    },
});
