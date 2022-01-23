import React, { useState, useEffect } from "react";

const VideoDetail = ({ video }) => {
  const [videoWidth, setVideoWidth] = useState(900);

  console.log(video);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setVideoWidth(500);
    }
  }, [window.innerWidth]);

  if (!video) {
    return <div>Start searching for videos from the search bar!</div>;
  }
  console.log(videoWidth);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe
        style={{
          float: "left",
          minHeight: 500,
          width: "65vw",
        }}
        src={videoSrc}
        title={video.id.videoId}
      />
    </div>
  );
};

export default VideoDetail;
