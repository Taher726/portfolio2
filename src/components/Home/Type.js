import React from "react";
import Typewriter from "typewriter-effect";

export default function Type(){
    return(
        <Typewriter
            options={{
                strings:[
                    "Web Developer",
                    "Mobile Developer",
                    "Computer Science Student",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}