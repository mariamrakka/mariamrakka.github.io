import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = ({ theme, onThemeChange }) => {
    const isDark = theme === "dark";
    const toggleTheme = () => {
        onThemeChange(isDark ? "light" : "dark");
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg={isDark ? "dark" : "light"}
            variant={isDark ? "dark" : "light"}
        >
            <Container>
                <Navbar.Brand className="d-flex align-items-center" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="centered-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/vitae">
                                Curriculum Vitae
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/publications">
                                Publications
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                Contact
                            </Nav.Link>
                            <button
                                type="button"
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label={
                                    isDark
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                                title={
                                    isDark
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                            >
                                {isDark ? (
                                    <svg
                                        className="theme-icon"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="4.5" />
                                        <line x1="12" y1="2" x2="12" y2="5" />
                                        <line
                                            x1="12"
                                            y1="19"
                                            x2="12"
                                            y2="22"
                                        />
                                        <line
                                            x1="2"
                                            y1="12"
                                            x2="5"
                                            y2="12"
                                        />
                                        <line
                                            x1="19"
                                            y1="12"
                                            x2="22"
                                            y2="12"
                                        />
                                        <line
                                            x1="4.2"
                                            y1="4.2"
                                            x2="6.4"
                                            y2="6.4"
                                        />
                                        <line
                                            x1="17.6"
                                            y1="17.6"
                                            x2="19.8"
                                            y2="19.8"
                                        />
                                        <line
                                            x1="4.2"
                                            y1="19.8"
                                            x2="6.4"
                                            y2="17.6"
                                        />
                                        <line
                                            x1="17.6"
                                            y1="6.4"
                                            x2="19.8"
                                            y2="4.2"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="theme-icon"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.6 15.2a8.4 8.4 0 0 1-11.8-10.9 9.2 9.2 0 1 0 11.8 10.9z" />
                                    </svg>
                                )}
                            </button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
