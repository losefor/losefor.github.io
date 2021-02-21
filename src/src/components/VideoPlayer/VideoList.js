import React from 'react'

import VideoListSection from './VideoListSection'

export default function VideoList({sections , className , onChange , selectedVideo}) {
    console.log(sections)
    return (
        <div className={`video-list ${className}`}>
            <div className='video-list__header'>
                play list
            </div>
            <div className='video-list__body'>
                {sections && sections.map((section,index) =>(
                    <VideoListSection key={index} onChange={onChange} title={section.title} videos={section.videos} selectedVideo={selectedVideo} />
                ))}
            </div>
        </div>
    )
}
