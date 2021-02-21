import React from "react";
import ReactPlayer from "react-player";

import PlayIcon from "./PlayIcon";

import View from '../View'
export default function VideoPlayer({
  url,
  controls,
  light,
  playing,
  width,
  height,
}) {
  return (
    <View className='player-wrapper' display='flex'>
      <ReactPlayer
        url={url}
        controls={controls}
        light={light}
        playIcon={<PlayIcon />}
        playing={playing}
        width='100%'
        height='100%'
        className='react-player'
      />
    </View>
  );
}
