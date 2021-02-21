import React from "react";
import VideoItem from "./VideoItem";
export default function VideoListSection({ title, videos , onChange , selectedVideo }) {
  // console.log(title);
  return (
    <div className="video-list-section">
      <div className="video-list-section__header">{title}</div>
      <div className="video-list-section__body">
        {videos.map((data,index) => (
          <div key={index} onClick={()=>onChange(data.video)}>
          <VideoItem
            img={`https://img.youtube.com/vi/${data.video.videoId}/mqdefault.jpg`}
            title={data.video.title}
            _id={data.video._id} 
            selectedVideo={selectedVideo}
            />
            </div>
        ))}
      </div>
    </div>
  );
}
