import React from "react";
import "./preloader.css";

export default function Preloader(props){
    return(
        <div id={props.laod ? "preloader" : "preloader-none"}>

        </div>
    );
}