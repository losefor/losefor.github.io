import React from 'react'
import SlideToggle from "react-slide-toggle";

import View from '../View'
import VideoList from './VideoList'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";


export default function MobileVideoList({selectedVideo , video , sections , onChange}) {
  console.log(sections)
    return (
        <SlideToggle
        collapsed
        render={({ toggle, setCollapsibleElement, toggleState }) => (
          <>
            <View display="flex" alignItems="center">
             {video && <h1
                onClick={toggle}
                className="heading1"
                style={{ margin: "5px 0", flex: 1 }}
              >
                {video.title}
              </h1>}

              <View ph={1}>
                <FontAwesomeIcon
                className='show--700'
                  size="2x"
                  color={"#ccc"}
                  icon={
                    toggleState == "COLLAPSED"
                      ? faChevronDown
                      : faChevronUp
                  }
                />
              </View>
            </View>

            <div ref={setCollapsibleElement}>
              {console.log(sections)}
              <VideoList
                onChange={onChange}
                sections={sections}
                className="show--700 video-list--mobile"
                selectedVideo={selectedVideo}
              />
            </div>
          </>
        )}
      />
    )
}
