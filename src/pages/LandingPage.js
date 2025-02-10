import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "../styling/LandingPage.css";
import cactusImage from "../images/cactus.png";
import youtubeImage from "../images/youtubeLogo.webp";
import tiktokImage from "../images/tiktokLogo.png";
import igImage from "../images/igLogo.png";
import bible from "../images/bible.webp";
import bibleStudyImage from "../images/bibleStudyImage.jpg";
import websiteLogo from "../images/websiteLogo.jpeg";
import { Helmet } from "react-helmet"; // Importing Helmet

const LandingPage = () => {
  const [verse, setVerse] = useState("Click the button to get one random Bible fact");
  const [verses, setVerses] = useState([]);
  const [lastIndex, setLastIndex] = useState(-1);
  const bibleEmoji = "\u{1F4D6}";
  const prayerEmoji = "\u{1F64F}";

  useEffect(() => {
    fetch("/facts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data.verses || !Array.isArray(data.verses)) {
          throw new Error("Invalid JSON structure");
        }
        setVerses(data.verses);
      })
      .catch((error) => console.error("Error loading verses:", error));
  }, []);

  const generateVerse = () => {
    if (verses.length === 0) return;

    const cactus = document.getElementById("saguaro");
    const verseElement = document.getElementById("verse");

    if (!cactus || !verseElement) return;

    verseElement.style.opacity = 0;
    cactus.style.visibility = "visible";
    cactus.style.opacity = 1;

    let currentRotation = cactus.dataset.rotation ? parseInt(cactus.dataset.rotation) : 0;
    currentRotation += 720;
    cactus.style.transform = `rotate(${currentRotation}deg)`;
    cactus.dataset.rotation = currentRotation;

    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * verses.length);
      } while (randomIndex === lastIndex);

      setLastIndex(randomIndex);
      setVerse(verses[randomIndex].text);

      verseElement.style.opacity = 1;
      cactus.style.opacity = 0;
    }, 2000);
  };
  const navigate = useNavigate();
  const BornAgainPage = () => {
    
    return (navigate("/BornAgainHowTo"));
  };
  const YaGroupPage = () => {
    
    return (navigate("/YaGroupArticle"));
  };
  const AboutUsPage = () => {
    
    return (navigate("/AboutUs"));
  };

  return (
    <div className="landingPageWrapper">
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-6840780798204022" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn about VerseFacts.com, a Christian website that shares biblical truth, apologetics, and resources to strengthen your faith." />
        <title>LandingPage - VerseFacts.com</title>
      </Helmet>

      <div className="page1">
        <div className="container">
          <div className="titleText">
            <span>{bibleEmoji}</span>
            <span>Did you know?</span>
            <span>{prayerEmoji}</span>
          </div>
          <h2 className="bibleFactTextGenerator">Bible Fact Generator</h2>
          <div className="contentWrapper">
            <p id="verse">{verse}</p>
            <img src={cactusImage} id="saguaro" alt="Cactus" />
          </div>
          <button onClick={generateVerse}>Generate Verse</button>
        </div>
      </div>

      <div id="nextPage" className="nextPage">
        <div className="tiles">
          <div className="tile" onClick={BornAgainPage}>
            <img src={bible} alt="Open Bible" id="bible"/>
            <h2 className="aboutUsTitle">How to Become a Christian in 3 Easy Steps</h2>
            <p className="aboutUsParagraph">Click here if you are curious about Christianity</p>
          </div>
          <div className="tile" onClick={YaGroupPage}>
            <img src={bibleStudyImage} alt="Open Bible" id="bibleStudy"/>
            <h2 className="aboutUsTitle">Top 10 Christian bible study groups in Tucson, Arizona.</h2>
            <p className="aboutUsParagraph">If you are interested in finding some young adult bible study groups, then click here.</p>
          </div>
          <div className="tile" onClick={AboutUsPage}>
            <img src={websiteLogo} alt="Website Logo" id="websiteLogo"/>
            <h2 className="aboutUsTitle">About Us</h2>
            <p className="aboutUsParagraph">Click here to see a video about us with some of our values.</p>
          </div>
        </div>
        <div className="socialMedia">
          <a href="https://www.instagram.com/versefacts.com_2025/">
            <img src={igImage} alt="Instagram Logo" id="igLogo"/>
          </a>

          <div className="youtubeDiv">
            <a href="https://www.youtube.com/@VerseFacts-s7g">
              <img src={youtubeImage} alt="Youtube Logo" id="youtubeLogo"/>
            </a>
            
          </div>
          <a href="https://www.tiktok.com/@versefacts.com">
            <img src={tiktokImage} alt="Tiktok Logo" id="tiktokLogo"/>
          </a>

        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;

