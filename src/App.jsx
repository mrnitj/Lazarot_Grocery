import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
// ---pages-----
import Cart from "./pages/User/Cart";
import { useMode } from "./store/mode-store";
// -------------
import { lightTheme, darkTheme } from "./theme";
import UserPage from "./pages/User/UserPage";
import Products from "./pages/User/Products";

const App = () => {
    const { mode, setMode } = useMode();
    useEffect(() => {
        document.body.style.backgroundColor = mode ? darkTheme.palette.primary.main : lightTheme.palette.primary.main;
    }, [mode]);

    return (
        <div>
            <ThemeProvider theme={mode ? darkTheme : lightTheme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<UserPage />} />
                        <Route path="/user/cart" element={<Cart />} />
                        <Route path="/user/products" element={<Products />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
