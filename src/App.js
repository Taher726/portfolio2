import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Resume from "./components/Resume/Resume";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Preloader from "./Pre/Preloader";

export default function App(){
  const [load, setLoad] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoad(false);
    },1200);
    return () => clearTimeout(timer);
  },[]);
  return(
    <Router>
      <Preloader load={load}/>
      <div className="App">
        <Navar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}