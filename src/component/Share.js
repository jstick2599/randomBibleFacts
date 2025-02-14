import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const Share = ({ url, title }) => {
  return (
    <div className="share-buttons">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      {/* <EmailShareButton url={url} subject={title} body="Check out this article:">
        <EmailIcon size={32} round />
      </EmailShareButton> */}
    </div>
  );
};

export default Share;
