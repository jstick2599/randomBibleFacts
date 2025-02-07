import React from "react";
import "../styling/AboutUs.css";

function AboutUs(){
    return (
        <div className="aboutUsPage">
            <div className="video">
                <video width="600" height="100vh" controls>
                <source src="/aboutUsVideo.mov" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>

        </div>
    );
}
export default AboutUs;