import { useState, useEffect } from "react";
import axios from "axios";

export function useVideoInfo(id) {

  const [statistics, setStatistics] = useState({
    commentCount : 0 ,
    dislikeCount : 0 ,
    likeCount : 0 ,
    viewCount : 0 
  });

  const [snippet, setSnippet] = useState({
      title : '' , 
    channelId : '' , 
    channelTitle : '' , 
    defaultAudioLanguage : '' , 
    defaultLanguage : '' , 
    description : '' , 
    tags : [] , 
    tags : '' , 
    tags : '' , 

  });

  const dataHandler = () => {
    const KEY = "AIzaSyB9XpWtxr5Y-yvlwHLOpoC1w1m4-kZO8fk";

    axios
      .get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          id,
          key: KEY,
          part: "statistics,snippet",
        },
      })
      .then((res) => {
        setStatistics(res.data.items[0].statistics);
        setSnippet(res.data.items[0].snippet);
      });
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return {
    snippet,
    statistics,
  };
}
