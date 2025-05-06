import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Vitae from "./Pages/Vitae.js";
import MyNavbar from "./Components/MyNavbar.js";
import Publications from "./Pages/Publications.js";
import About from "./Pages/About.js";

const App = () => {
    return (
        <div className="dark-theme">
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vitae" element={<Vitae />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;
