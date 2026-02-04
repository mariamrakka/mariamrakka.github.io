import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Vitae from "./Pages/Vitae.js";
import MyNavbar from "./Components/MyNavbar.js";
import Publications from "./Pages/Publications.js";
import About from "./Pages/About.js";

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }

    return "light";
};

const App = () => {
    const [theme, setTheme] = React.useState(getInitialTheme);
    const currentYear = 2026;

    React.useEffect(() => {
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className={`app theme-${theme}`}>
            <MyNavbar theme={theme} onThemeChange={setTheme} />
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vitae" element={<Vitae />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <footer className="site-footer">
                © {currentYear} Mariam Rakka. Created with prompt engineering in
                Codex.
            </footer>
        </div>
    );
};

export default App;
