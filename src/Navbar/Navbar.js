import React , { useState } from "react";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LOGO from "../Assets/logo.png";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { DiReact } from "react-icons/di";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function Navar(){
    const [navColor, updateNavColor] = useState(false);
    const [expand, updateExpand] = useState(false);
    function scrollHandler(){
        if(window.scrollY >= 20){
            updateNavColor(true);
        }
        else{
            updateNavColor(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);
    return(
        <Navbar expanded={expand} fixed="top" expand="md" className={navColor ? "sticky": "navabr"}>
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <h3 className="logo purple"><DiReact style={{ fontSize:"40px" }}/> Taher Portfolio</h3>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpand(expand ? false : "expanded");
                    }}
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">
                                <AiOutlineHome/> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about">
                                <AiOutlineUser/> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects">
                                <AiOutlineFundProjectionScreen/> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume">
                                <CgFileDocument/> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}