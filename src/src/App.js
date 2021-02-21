import React from 'react';
import Home from './screens/Home'
import ThemeProvider from './hooks/ThemeProvider'
import CourseHandler from './screens/CourseHandler';
import VideoViewr from './screens/VideoViewr';


export default function App () {
  return (
    <ThemeProvider >
     <VideoViewr/>
    </ThemeProvider>
  );
}

