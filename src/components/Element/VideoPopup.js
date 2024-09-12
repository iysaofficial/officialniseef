import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const VideoPopup = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="YBhdvQ1p5xQ"
        onClose={() => setOpen(false)}
      />
      <button
        className="play-btn popup-youtube border-0"
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "transparent" }}
      >
        <i className="fas fa-play text-white"></i>{" "}
      </button>
    </React.Fragment>
  );
};
const VideoPopup2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="YBhdvQ1p5xQ"
        onClose={() => setOpen(false)}
      />
      <button
        tabIndex="0"
        className="play-btn popup-youtube border-0"
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "transparent" }}
      >
        <i className="flaticon-play-button text-white"></i>
      </button>
    </React.Fragment>
  );
};
export { VideoPopup2 };
export default VideoPopup;
