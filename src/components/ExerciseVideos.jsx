import React from "react";
import "./ExerciseVideos.css";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading";

  return (
    <div className="videosContainer">
      <div className="videosTitle">
        Watch <span className="videosTitleSpan">{name}</span> exercise videos.
      </div>
      <div className="videosGrid">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exerciseVideo"
            target="_blank"
            rel="noreferrer">
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="videosVideos"
            />
            <div className="videosInfo">
              <div className="videosInfoTitle">{item.video.title}</div>
              <div className="videosInfoChannel">{item.video.channelName}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
