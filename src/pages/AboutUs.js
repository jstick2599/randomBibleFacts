
import React from "react";
import "../styling/AboutUs.css";
import aboutUsPic from "../images/aboutUsPic.jpg";
import cactus from "../images/cactus.png";

function AboutUs(){
    return (
        <div className="aboutUsPage">
            <div className="video">
                <video width="600" height="100vh" controls>
                <source src="/aboutUsVideo.mov" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
            <div className="paragraphs">
                <div className="images">
                    <img src={aboutUsPic} alt="Two creators of website" id="aboutUsImg"/>
                    {/* <img src={cactus} alt="Cactus" id="cactusImg"/> */}
                </div>
                <p className="bio">Welcome to VerseFacts.com, a Christian website dedicated to sharing the truth of God's Word with the world. Our mission is twofold: to help non-believers encounter the life-changing power of Jesus Christ and to equip believers to grow deeper in their faith.</p>
                <p className="bio">We live in a time when misinformation and doubt can cloud the truth of the Gospel. At VerseFacts.com, we aim to cut through the noise by providing biblical insights, apologetics, and faith-based resources that strengthen your understanding of Scripture. Whether you are exploring Christianity for the first time or seeking to deepen your walk with Christ, our content is designed to guide, encourage, and inspire.</p>
                <p className="bio">We believe the Bible is the inerrant Word of God, Jesus is the only way to salvation, and faith in Him transforms lives. Through carefully researched articles, compelling evidence for biblical truth, and practical teachings, we strive to share the Good News with clarity and conviction.</p>
                <p className="bio">Thank you for visiting VerseFacts.com—where truth meets faith, and faith leads to life.</p>
            </div>
                

        </div>
    );
}
export default AboutUs;
