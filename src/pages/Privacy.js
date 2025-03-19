import React from "react";
import "../styling/Privacy.css";

function Privacy() {
    return (
        <div className="privacyContainer">
            <h1 className="privacyH1">Privacy Policy</h1>
            <p className="privacyP"><strong>Last Updated: March 19, 2025</strong></p>
            
            <h2 className="privacyH2">We value your privacy. Here’s how we handle data related to VerseFacts.com:</h2>
            <h3 className="privacyH3">No Personal Data Collection</h3>
            <p className="privacyP">Our website does not collect or store any personal information.</p>
            
            <h3>Google AdSense</h3>
            <p className="privacyP">We use Google AdSense to display ads on our site. Google and its partners may use cookies or similar technologies to serve personalized ads based on your browsing behavior. This data collection is managed by Google, not us. For more details, see Google’s Privacy Policy and learn how to opt out of personalized ads.</p>
            
            <h3 className="privacyH3">Questions?</h3>
            <p className="privacyP">If you have concerns about privacy, contact us at <a className="privacyA" href="mailto:vendingcactus@gmail.com">vendingcactus@gmail.com</a></p>
            
            <h2 className="privacyH2">Changes to This Privacy Policy</h2>
            <p className="privacyP">We reserve the right to update this privacy policy with or without notice. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
        </div>
    );
}

export default Privacy;
