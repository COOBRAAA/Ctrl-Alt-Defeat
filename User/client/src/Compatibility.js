import React from "react";
import './Compatibility.css';

export default function Compatibility(){
    return(
        <div className="Compatibility">
            <div className="contentcomp">
                <h1>System Compatibility Check</h1>
                <p>Ensure Your System Meets the Requirements</p>
                <div className="nav-btn">
                    <a href="/Dashboard">
                        <button className="L">
                            <img src={require("./left.png")} width={40}></img>
                        </button>
                    </a>
                    <a href="/Checkwindow">
                        <button className="L">
                            <img src={require("./right.png")} width={40}></img>
                        </button>
                    </a>
                </div>
            </div>
            <img src={require("./lap.png")}></img>
        </div>
    )
}