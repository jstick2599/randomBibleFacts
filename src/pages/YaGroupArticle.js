
import React from "react";
import "../styling/YaGroupArticle.css";
import bibleStudyArticleImage from "../images/bibleStudyArticleImage.jpg";
import cccChurch from  "../images/cccChurch.jpg";
import calvaryChurch from "../images/calvaryTucsonChurch.jpg";
import mvbcChurch from "../images/mvbcChurch.png";
import lifePointChurch from "../images/lifePointChurch.webp";
import uaCatholic from "../images/uaCatholic.webp";
import unleashedChurch from "../images/unleashedChurch.png";
import faithTucson from "../images/faithTucsonChurch.png";
import stTucson from "../images/stTucson.jpg"
import tucsonDiocese from "../images/dioceseOfTucson.png";
import { Helmet } from "react-helmet"; // Importing Helmet

function YaGroupArticle(){
    return(
        <div className="yaFullPage">
            <Helmet>
                <meta name="google-adsense-account" content="ca-pub-6840780798204022" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn about VerseFacts.com, a Christian website that shares biblical truth, apologetics, and resources to strengthen your faith." />
                <title> Tucson Young Adult Groups Article - VerseFacts.com</title>
            </Helmet>
            <h1 className="yaTitle">Top 10 Christian bible study groups in Tucson, Arizona</h1>
            <div className="yaImage">
                <img src={bibleStudyArticleImage} alt="Bible Study" id="bibleStudyArticleImage"/>
            </div>

            <div className="yaSubTitle">
                <h3>Tucson, Arizona, offers a vibrant array of young adult Bible study groups, each fostering spiritual growth and community among individuals in their late teens to early thirties. Here are some notable groups in the area:
                </h3>
            </div>

            <div className="bibleStudyList">
                <div className="column" id="rc">
                    <img src={cccChurch} alt="Christ Community Church" id="cccChurchImage"/>
                    <h4>
                        <span className="normalText">1.</span>Pursuit at Christ Community Church
                    
                    </h4>              
                    <ul>
                        <li>Description: A gathering for college students and young adults focusing on deepening faith through study and fellowship.</li>
                        <li>Meeting Time: Tuesdays at 6 PM</li>
                        <li>Location: Green-4 Room, Christ Community Church</li>
                        <li>Contact: Brian & Katy McHolm</li>
                        <li>More Information:
                        <a href="https://www.ccctucson.org/">
                        ccctucson.org</a>
                        </li>
                    </ul>
                </div>
                <div className="column" id="rc">
                    <h4>
                        <span className="normalText">2.</span>Young Professionals at Christ Community Church           
                    </h4> 
                    <ul>
                        <li>Description: Designed for individuals aged 22-35, this group meets bi-weekly for discussions and organizes various social events like concerts, hikes, and game nights. </li>
                        <li>Meeting Time: Every other Thursday at 7:30 PM</li>
                        <li>Location: Member's homes</li>
                        <li>Contact: Ryan and Tasha Pixler</li>
                        <li>More Information:
                        <a href="https://www.ccctucson.org/">
                        ccctucson.org</a>
                        </li>

                    </ul>
                </div>
                <div className="column" id="rc">
                    <img src={calvaryChurch} alt="Calvary Tucson Church" id="calvaryChurchImage"/>
                    <h4>
                        <span className="normalText">3.</span>Ignition Young Adults at Calvary Tucson                    
                    </h4>              
                    <ul>
                        <li>Description: A community for individuals aged 18-28, offering worship and verse-by-verse Bible teaching to ignite a passion for Christ.</li>
                        <li>Meeting Time: Thursdays at 7 PM</li>
                        <li>Location: Calvary Tucson</li>
                        <li>Contact: JD Reyes</li>
                        <li>More Information:
                        <a href="https://www.calvarytucson.com/">
                        calvarytucson.com</a>
                        </li>
                    </ul>
                </div>
                <img src={mvbcChurch} alt="Mountain  View Baptist Church folks" id="mvbcChurch"/>
                <div className="column" id="rc">
                    <h4>
                        <span className="normalText">4.</span>Young Adult Ministry at Mountain View Baptist Church           
                    </h4> 
                    <ul>
                        <li>Description: A dynamic community for individuals post-high school through age 30, focusing on deepening faith and building meaningful relationships. </li>
                        <li>Meeting Times: Sunday Mornings at 9:00 AM and Sunday Nights at 6:00 PM</li>
                        <li>Location: Mountain View Baptist Church</li>
                        <li>Contact: Pastor Jared Moore</li>
                        <li>More Information:
                        <a href="https://www.mvbctucson.org/">
                        mvbctucson.org</a>
                        </li>

                    </ul>
                </div>
                <div className="column" id="rc">
                    <img src={lifePointChurch} alt="LifePoint Church folks" id="lifePointChurch"/>
                    <h4>
                        <span className="normalText">5.</span>Young Adult Life Group at LifePoint Church                    
                    </h4>              
                    <ul>
                        <li>Description: A group for individuals aged 18-30, focusing on Bible study and community building.</li>
                        <li>Meeting Time: Mondays at 6:30 PM</li>
                        <li>Location: Youth Room at LifePoint Church</li>
                        <li>More Information:
                        <a href="https://www.lifepointtucson.com/">
                        lifepointtucson.com</a> 
                        </li>
                    </ul>
                </div>
                <div className="column" id="rc">
                    <img src={uaCatholic} alt="UA Catholic Young Adults" id="uaCatholicChurch"/>
                    <h4>
                        <span className="normalText">6.</span>Young Adult Community at St. Thomas More Catholic Newman Center           
                    </h4> 
                    <ul>
                        <li>Description: A community for individuals aged 22-35, offering weekly gatherings and monthly social events to foster faith and fellowship.</li>
                        <li>Meeting Time: Tuesdays at 7 PM</li>
                        <li>Location: Bishop Green Hall</li>
                        <li>More Information:
                        <a href="https://www.uacatholic.org/">
                        uacatholic.org</a> 
                        </li>
                    </ul>
                </div>
                <div className="column" id="rc">
                    <div className="unleashedChurchDiv">
                        <img src={unleashedChurch} alt="Unleashed Church logo" id="unleashedChurch"/>
                    </div>
                        
                    <h4>
                        <span className="normalText">7.</span>Young Adults at Unleashed Christian Church                    
                    </h4>              
                    <ul>
                        <li>Description: A ministry for individuals aged 18-27, providing a space for support, perspective, and purpose through authentic community.</li>
                        <li>Meeting Time: Thursdays at 6:30 PM</li>
                        <li>Location: 265 W. Valencia Rd., Tucson, AZ 85706</li>
                        <li>More Information:
                        <a href="https://www.unleashedchristian.com/">
                        unleashedchristian.com</a> 

                        </li>
                    </ul>
                </div>
                <div className="column" id="rc">
                    <img src={faithTucson} alt="Faith Tucson Church logo" id="faithTucson"/>
                    <h4>
                        <span className="normalText">8.</span>Young Adults of Faith at Faith Community Church           
                    </h4> 
                    <ul>
                        <li>Description: An active group offering small groups and various activities to help young adults deepen their relationship with God and each other.</li>
                        <li>Contact: Young Adults Pastor</li>
                        <li>More Information: <a href="https://www.faithtucson.org/">faithtucson.org</a> 
                        </li>
          

                    </ul>
                </div>

                <div className="column" id="rc">
                    <img src={stTucson} alt="Saint Thomas Church logo" id="stTucson"/>
                    <h4>
                        <span className="normalText">9.</span>Young Adult Ministry at St. Thomas the Apostle                    
                    </h4>              
                    <ul>
                        <li>Description: Geared towards individuals in their 20s and 30s, this ministry offers opportunities for prayer, service, and formation within a supportive community.</li>
                        <li>Meeting Time: Thursdays, 6:30 - 7:30 PM</li>
                        <li>Location: Chapel at St. Thomas the Apostle</li>
                        <li>More Information: <a href="https://www.statucson.org/">statucson.org</a>  
                        </li>
                    </ul>
                </div>
                <div className="column" id="rc">
                    <img src={tucsonDiocese} alt="Diocese of Tucson" id="tucsonDiocese"/>
                    <h4>
                        <span className="normalText">10.</span>Young Adult Ministries in the Diocese of Tucson           
                    </h4> 
                    <ul>
                        <li>Description: The Diocese of Tucson hosts various young adult ministries across different parishes, offering diverse opportunities for engagement and spiritual growth.</li>
                        <li>More Information: <a href="https://www.diocesetucson.org/">diocesetucson.org</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <h4 id="lastSentence">These groups provide welcoming environments for young adults in Tucson to explore their faith, build lasting relationships, and engage with the community.</h4>

            
            

        </div>
    );

}
export default YaGroupArticle; 
