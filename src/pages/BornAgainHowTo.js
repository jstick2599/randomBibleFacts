import React from "react";
import "../styling/BornAgainHowTo.css";
import baptism from "../images/claraBaptism.JPG";


function BornAgainHowTo(){
    return(
        <div className="bornAgainFullPage">
            <h1 className="bornAgainTitle">How to Become a Christian in 3 Easy Steps</h1>
            <div className="baptismDiv">
                <img src={baptism} alt="Receiving baptism" id="baptizedPic"/>
            </div>

            <div className="bornAgainDiv">
                <h2 className="subTitle">Becoming a Christian is the most important decision you will ever make. It’s not about religion or rituals... it’s about a personal relationship with Jesus Christ. The good news is that God has made it simple. Here are three easy steps to begin your journey of faith:</h2>
                <h2 className="step">Step 1: Recognize Your Need for a Savior</h2>
                <h3>The first step in becoming a Christian is understanding that we are all sinners and need God's forgiveness. The Bible says:</h3>
                <h3>“For all have sinned and fall short of the glory of God.” – Romans 3:23</h3>
                <h3>Sin separates us from God, and no amount of good works can save us. But the good news is that God loves us so much that He made a way for us to be forgiven.</h3>
                <h2 className="step">Step 2: Believe in Jesus Christ</h2>
                <h3>God sent His Son, Jesus, to pay the price for our sins. He died on the cross and rose again, proving His power over sin and death. The Bible tells us:</h3>
                <h3>“For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.” – John 3:16</h3>
                <h3>Salvation is a free gift. We don’t earn it—we simply believe in what Jesus did for us and trust Him as our Lord and Savior.</h3>
                <h2 className="step">Step 3: Confess and Commit Your Life to Christ</h2>
                <h3>The final step is to confess your faith in Jesus and commit to following Him. The Bible promises:</h3>
                <h3>“If you declare with your mouth, ‘Jesus is Lord,’ and believe in your heart that God raised Him from the dead, you will be saved.” – Romans 10:9</h3>
                <h3>You can do this by praying a simple prayer, such as:</h3>
                <h3>“Lord Jesus, I know that I am a sinner and need Your forgiveness. I believe You died for my sins and rose again. I ask You to come into my life, be my Lord and Savior, and help me live for You. Amen.”</h3>
                <h3>If you prayed this prayer sincerely, congratulations! You are now a Christian.</h3>
                <h2 className="nextStep">What’s Next?</h2>
                <div className="bornAgainBottomSection">
                    <h3>Now that you’ve started your journey with Christ:</h3>
                    <h3>Read the Bible daily to grow in your faith. Pray and talk to God regularly. Find a Bible-believing church and connect with other Christians. Share your faith with others and live out your new life in Christ. Becoming a Christian is just the beginning of an incredible relationship with God. He has a great plan for your life!</h3>
                    <h4 className="bornAgainLastSentence">Would you like help finding resources to grow in your faith? Let me know!</h4>
                </div>
            </div>
        </div>
    )
}
export default BornAgainHowTo; 