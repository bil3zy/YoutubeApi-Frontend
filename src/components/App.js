import React, {useState} from "react";
import youtube from "../api/youtube";
import Header from "./Header";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onTermSubmit = async (term) => {
    const response = await youtube.get("", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <Header onTermSubmit={onTermSubmit} />
      <div className="body">
        <VideoDetail video={selectedVideo} />
        <div>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
