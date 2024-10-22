import React from "react";

import ReactPlayer from "react-player";
import video1 from "/videos/Cyber_security.mp4";

const VideoPlayer = () => {
  return (
    <section className="h-[500px] w-[800px] bg-video1 bg-center bg-cover mb-32 pb-3">
      <ReactPlayer url={video1} width="100%" height="100%" controls light />
    </section>
  );
};

export default VideoPlayer;
