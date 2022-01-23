import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item-container " onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="img"
      />
      <div className="card-title">
        <p>{video.snippet.title}</p>
        <hr />
      </div>
    </div>
  );
};

export default VideoItem;
