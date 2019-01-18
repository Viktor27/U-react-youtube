import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <h2 className="header">{video.snippet.title}</h2>
      </div>
    </div>
  );
};
export default VideoItem;
