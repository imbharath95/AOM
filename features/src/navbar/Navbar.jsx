import React from "react";
import { useState } from "react";
//import '/Users/sainathreddy/Desktop/AOM/features/src/index.css'

function NavBar(){


    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <img src="/Users/sainathreddy/Desktop/AOM/features/src/navbar/AOM.png" alt="AOM" style={{padding:"2px",paddingLeft:"5px"}}></img>
            <h4 style={{padding:"2px"}}>services</h4>
            <h4 style={{padding:"2px",paddingRight:"5px"}}>contact</h4>
        </div>
    )
}

export default NavBar;