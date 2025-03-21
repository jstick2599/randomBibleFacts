import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/LandingPage.css";
import cactusImage from "../images/cactus.png";
import croppedCactus from "../images/croppedCactus.png";
import youtubeImage from "../images/youtubeLogo.webp";
import tiktokImage from "../images/tiktokLogo.png";
import igImage from "../images/igLogo.png";
import bible from "../images/bible.webp";
import bibleStudyImage from "../images/bibleStudyImage.jpg";
import websiteLogo from "../images/websiteLogo.jpeg";
import princeOfPeaceImage from "../images/croppedJesusPhoto.png";
import topDenari from "../images/topDenari.jpg";
import money from "../images/money.jpg";
import Share from "../component/Share.js";


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
      const selectedVerse = verses[randomIndex]; // Get full verse object
  
      // Update the verse state with structured HTML content
      const formattedContent = `
        <h2 style="color:${selectedVerse.styles.title.color}; font-size:${selectedVerse.styles.title.fontSize}; font-weight:${selectedVerse.styles.title.fontWeight}; margin-bottom: 10px;">
          ${selectedVerse.title}
        </h2>
        <p style="color:${selectedVerse.styles.verseReference.color}; font-size:${selectedVerse.styles.verseReference.fontSize}; font-weight:${selectedVerse.styles.verseReference.fontWeight}; margin-bottom: 10px;">
          <strong>${selectedVerse.verse.reference}</strong>
        </p>
        <p style="color:${selectedVerse.styles.verseText.color}; font-style:${selectedVerse.styles.verseText.fontStyle}; margin-bottom: 10px;">
          ${selectedVerse.verse.text}
        </p>
        <p style="color:${selectedVerse.styles.fact.color}; font-size:${selectedVerse.styles.fact.fontSize}; margin-bottom: 10px;">
          <strong>Fact:</strong> ${selectedVerse.fact}
        </p>
        <p style="color:${selectedVerse.styles.source.color}; font-size:${selectedVerse.styles.source.fontSize}; font-style:${selectedVerse.styles.source.fontStyle};">
          <strong>Source:</strong> ${selectedVerse.source}
        </p>
        <img src="${selectedVerse.image}" alt="${selectedVerse.title}" style="max-width: 300px; margin-bottom: 10px;" />
      `;
  
      setVerse(formattedContent);
  
      verseElement.style.opacity = 1;
      cactus.style.opacity = 0;
    }, 2000);
  };
  
  

  const navigate = useNavigate();
  const BornAgainPage = () => navigate("/BornAgainHowTo");
  const YaGroupPage = () => navigate("/YaGroupArticle");
  const AboutUsPage = () => navigate("/AboutUs");
  const VisionsOfChrist = () => navigate("/JesusVisions");
  const JesusCoin = () => navigate("/JesusCoin");
  const FaithOverFinances = () => navigate("/FaithOverFinances");
  const Privacy = () => navigate("/Privacy");
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
          <p id="verse" dangerouslySetInnerHTML={{ __html: verse }} />

            <img src={cactusImage} id="saguaro" alt="Cactus" />
          </div>
          <button onClick={generateVerse}>Generate Fact</button>
        </div>
      </div>

      {/* Ad Placement */}
      <div className="ad-container">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6840780798204022"
          data-ad-slot="YOUR_AD_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
      </div>

      <div id="nextPage" className="nextPage">
        <div className="tiles">
          <div className="rows">
            <div className="tile" onClick={BornAgainPage}>
              <img src={bible} alt="Open Bible" id="bible"/>
              <h2 className="aboutUsTitle">How to Become a Christian in 3 Easy Steps</h2>
              <p className="aboutUsParagraph">Click here if you are curious about Christianity. Becoming a Christian is the most important decision you will ever make. It is not about religion or rituals...</p>
              <div className="tileDescriptionDiv">
                <Share url="https://versefacts.com/BornAgainHowTo" title="Check out this amazing article!" body="Check out this article:"/>
                <p className="verseFacts">Verse Facts 2/7/2025</p>
              </div>
            </div>
            <div className="tile" onClick={YaGroupPage}>
              <img src={bibleStudyImage} alt="Open Bible" id="bibleStudy"/>
              <h2 className="aboutUsTitle">Top 10 Christian bible study groups in Tucson, Arizona.</h2>
              <p className="aboutUsParagraph">If you are interested in finding some young adult bible study groups, then click here.</p>
              <div className="tileDescriptionDiv">
                <Share url="https://versefacts.com/YaGroupArticle" title="Check out this amazing article!" body="Check out this article:"/>
                <p className="verseFacts">Verse Facts 2/7/2025</p>
              </div>
            </div>
            <div className="tile" onClick={AboutUsPage}>
              <img src={websiteLogo} alt="Website Logo" id="websiteLogo"/>
              <h2 className="aboutUsTitle">About Us</h2>
              <p className="aboutUsParagraph">Click here to see a video about us with some of our values.</p>
              <div className="tileDescriptionDiv">
                <Share url="https://versefacts.com/AboutUs" title="Check out this amazing article!" body="Check out this article:"/>
                <p className="verseFacts">Verse Facts 2/7/2025</p>
              </div>
            </div>

          </div>
          <div className="rows">
            <div className="tile" onClick={VisionsOfChrist}>
              <img src={princeOfPeaceImage} alt="Depiction of Jesus" id="jesusImage"/>
              <h2 className="aboutUsTitle">Jesus looks like this?</h2>
              <p className="aboutUsParagraph">Akiane Kramarik’s Prince of Peace, painted at eight from visions, was confirmed by Colton Burpo as the Jesus he saw in heaven after nearly dying at four. Their stories inspire faith despite skepticism. Both hold firm, sparking divine debate.</p>
              <div className="tileDescriptionDiv">
                <Share url="https://versefacts.com/JesusVisions" title="Check out this amazing article!" body="Check out this article:"/>
                <p className="verseFacts">Verse Facts 2/19/2025</p>
              </div>

            </div>
            <div className="tile" onClick={JesusCoin}>
              <img src={topDenari} alt="Denarius Coin" id="jesusImage" />
              <h2 className="aboutUsTitle">The Denarius of Destiny: God’s Perfect Timing in Jesus’ Teaching</h2>
              <p className="aboutUsParagraph">In Matthew 22:19-21, Jesus uses a coin with Caesar’s image which highlights God’s perfect timing. Minted between 14 and 37 AD. This demonstrates God’s precise orchestration of history and our lives, urging trust in His timing.</p>
              <div className="tileDescriptionDiv">
                <Share url="https://versefacts.com/JesusCoin" title="Check out this amazing article!" body="Check out this article:"/>
                <p className="verseFacts">Verse Facts 2/19/2025</p>
              </div>
            
            </div>
            <div className="tile" onClick={FaithOverFinances}>
            <img src={money} alt="Denarius Coin" id="jesusImage" />
              <h2 className="aboutUsTitle">Faith Over Finances</h2>
              <p className="aboutUsParagraph">In Matthew 22:19-21, Jesus uses a coin with Caesar’s image which highlights God’s perfect timing. Minted between 14 and 37 AD. This demonstrates God’s precise orchestration of history and our lives, urging trust in His timing.</p>
              <div className="tileDescriptionDiv">
                <Share url="https://versefacts.com/JesusCoin" title="Check out this amazing article!" body="Check out this article:"/>
                <p className="verseFacts">Verse Facts 2/19/2025</p>
              </div>
            
            </div>
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
        <div>
          <button onClick={Privacy}>Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 