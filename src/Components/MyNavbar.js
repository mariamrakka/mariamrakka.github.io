import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = ({ theme, onThemeChange }) => {
    const isDark = theme === "dark";

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg={isDark ? "dark" : "light"}
            variant={isDark ? "dark" : "light"}
        >
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    {/* <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "10px",
                        }}
                    /> */}
                    Mariam Rakka
                </Navbar.Brand>
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
                                About
                            </Nav.Link>
                            <NavDropdown
                                title="Theme"
                                id="theme-dropdown"
                            >
                                <NavDropdown.Item
                                    active={theme === "light"}
                                    onClick={() => onThemeChange("light")}
                                >
                                    Light
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    active={theme === "dark"}
                                    onClick={() => onThemeChange("dark")}
                                >
                                    Dark
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
