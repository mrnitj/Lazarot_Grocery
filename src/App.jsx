import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
// ---pages-----
import UserHome from "./pages/User/UserHome";
import Cart from "./pages/User/Cart";
import { useMode } from "./store/mode-store";
// -------------
import { lightTheme,darkTheme } from "./theme";


const App = () => {
    const {mode , setMode} = useMode()
    return (
        <div>
            <ThemeProvider theme={mode? darkTheme : lightTheme} >
                <Router>
                    <Routes>
                        <Route path="/" element={<UserHome />} />
                        <Route path="/user/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
