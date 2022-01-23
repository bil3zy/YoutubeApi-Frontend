import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <div className="container">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          style={{ width: 200, marginLeft: 20, cursor: "pointer" }}
        />
        <div
          style={{
            alignContent: "center",
            paddingLeft: 20,
            width: 200,
            overflow: "hidden",
          }}
        >
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
