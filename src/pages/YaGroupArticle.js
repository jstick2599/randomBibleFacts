
import React from "react";
import "../styling/YaGroupArticle.css";
import bibleStudyArticleImage from "../images/bibleStudyArticleImage.jpg";
import cccChurch from  "../images/cccChurch.jpg";
import calvaryChurch from "../images/calvaryTucsonChurch.jpg";
import mvbcChurch from "../images/mvbcChurch.png";
import lifePointChurch from "../images/lifePointChurch.webp";
import unleashedChurch from "../images/unleashedChurch.png";
import faithTucson from "../images/faithTucsonChurch.png";
import underGround from "../images/underGround.jpg";
import remnantYa from "../images/remnantYaGroup.jpg";
import rockChurch from "../images/rockChurch.png";


function YaGroupArticle(){
    return(
        <div className="yaFullPage">
            {/* <Ads client="ca-pub-6840780798204022" slot="2345678901" /> */}

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
                    <img src={rockChurch} alt="Rock Church Young Adults" id="rockChurch"/>
                    <h4>
                        <span className="normalText">6.</span>Rock Church's Young Adults Group          
                    </h4> 
                    <ul>
                        <li>Description: A gathering for young adults focusing on deepening diving into the word of God and fellowship with others between 18-30.</li>
                        <li>Meeting Time: Monday 6pm-9pm</li>
                        <li>Location: Sahuarita</li>
                        <li>More Information:
                        <a href="https://www.tros.church/upcoming-events/young-adults-ministry">
                        rockYaMinistry.org</a> 
                        </li>
                    </ul>




More Information: Young Adults Ministry | The Rock Church of Sahuarita
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
                    <img src={underGround} alt="Young Adults at Common Ground Underground group" id="underground"/>
                    <h4>
                        <span className="normalText">9.</span> Common Ground Young Adult Ministry called The Underground                  
                    </h4>              
                    <ul>
                        <li>Description: A gathering for young adults focusing on deepening faith through studying the bible and fellowship.</li>
                        <li>Meeting Time: Thursdays, 6:30PM</li>
                        <li>Location: Sahuarita</li>
                        <li>More Information: Instagram <a href="https://www.instagram.com/undergroundcgc/">Underground</a>  
                        </li>
                        <li>
                             Website: Common Ground <a href="https://cgcsahuarita.org/">https://cgcsahuarita.org/</a>
                        </li>
                        
                    </ul>


                </div>
                <div className="column" id="rc">
                    <img src={remnantYa} alt="Remnant of Tucson" id="remnantTucson"/>
                    <h4>
                        <span className="normalText">10.</span>Young Adult Ministry at Remnant of Tucson          
                    </h4> 
                    <ul>
                        <li>Description: A gathering for college students and young adults focusing on deepening faith through study and fellowship.</li>
                        <li>Meeting Time: Tuesdays at 7 PM</li>
                        <li>Location: Centrally Tucson</li>
                        <li>
                            Website: Remnant of Tucson  <a href="https://www.remnantoftucson.com/">remnantoftucson.com</a>
                        </li>
                        <li>
                            More Information: Instagram <a href="https://www.instagram.com/remnantoftucson/">remnantoftucson</a>
                        </li>

                    </ul>
                </div>
                
            </div>
            <h4 id="lastSentence">These groups provide welcoming environments for young adults in Tucson to explore their faith, build lasting relationships, and engage with the community.</h4>




            
            

        </div>
    );

}
export default YaGroupArticle; 
