import React from "react";
import Youtube from "react-youtube";
import View from "../components/View";
import Header from "../components/Header";
import Container from "../components/Container";
import Text from "../components/Text";

export default function VideoViewr() {
  const opts = {
    // height: "400",
    // width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
      color: "white",
      modestbranding: 1,
      playlist: "Mj3QejzYZ70",
      rel: 0,
    },
  };

  return (
    <div>
      <Container>
        <Header
          image={`https://img.youtube.com/vi/${"Mj3QejzYZ70"}/maxresdefault.jpg`}
          title="how to learn fast code"
          subTitle="learn how to display more videos"
        />
      </Container>

      <Container>
        <View pv={15}>
          <Text type="boldTitle">1)need to learn coding</Text>
        </View>
        <View pv={5}>
          <Text type="articleBody">
            learning coding is not should it's a must beacuse the first{" "}
          </Text>
        </View>
      </Container>

      <Container>
        <View mv={20} display="flexs" justifyContent="center">
          <Youtube className="yt-video" opts={opts} videoId="Mj3QejzYZ70" />
        </View>
      </Container>
    </div>
  );
}
