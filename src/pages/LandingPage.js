import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "../styling/LandingPage.css";
import cactusImage from "../images/cactus.png";
import youtubeImage from "../images/youtubeLogo.webp";
import tiktokImage from "../images/tiktokLogo.png";
import igImage from "../images/igLogo.png";

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
            <h2>How to Become a Christian in 3 Easy Steps</h2>
            <p>This is the content that comes after the verse.</p>
          </div>
          <div className="tile" onClick={YaGroupPage}>
            <h2>Top 10 Christian bible study groups in Tucson, Arizona</h2>
            <p>This is the content that comes after the verse.</p>
          </div>
          <div className="tile" onClick={AboutUsPage}>
            <h2>About Us</h2>
            <p>This is the content that comes after the verse.</p>
          </div>
        </div>
        <div className="socialMedia">
          <img src={igImage} alt="Instagram Logo" id="igLogo"/>
          <div className="youtubeDiv">
            <img src={youtubeImage} alt="Youtube Logo" id="youtubeLogo"/>
          </div>
          
          <img src={tiktokImage} alt="Tiktok Logo" id="tiktokLogo"/>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;

