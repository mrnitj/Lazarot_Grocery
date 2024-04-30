import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
// ---pages-----
import Cart from "./pages/User/Cart";
import { useMode } from "./store/mode-store";
// -------------
import { lightTheme, darkTheme } from "./theme";
import UserPage from "./pages/User/UserPage";

const App = () => {
    const { mode, setMode } = useMode();
    return (
        <div>
            <ThemeProvider theme={mode ? darkTheme : lightTheme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<UserPage />} />
                        <Route path="/user/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
