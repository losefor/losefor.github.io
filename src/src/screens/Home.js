import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import Container from "../components/Container";
import Header from "../components/Header";
import GategoryPicker from "../components/GategoryPicker";
import Card from "../components/Card";
import View from "../components/View";
import NoteStripe from "../components/NoteStripe";
import { colors } from "../config/colors";
// import { useCallback } from 'react'

export default function Home() {
  const gategories = [
    {
      title: "Programming",
      id: "programming",
    },
    {
      title: "Self Development",
      id: "SELF_DEVELOPMENT",
    },
  ];
  //Hu4Yvq-g7_Y
  const programming = [
    {
      id: "Mj3QejzYZ70",
    },
    {
      id: "eqrKxDbzhbg",
    },
  ];

  const selfImprovement = [
    {
      id: "Hu4Yvq-g7_Y",
    },
    {
      id: "y2X7c9TUQJ8",
    },
  ];

  const [gategory, setGategory] = useState("programming");
  const videos = gategory === "programming" ? programming : selfImprovement;

  return (
    <>
      {/* <img src='https://img.youtube.com/vi/eqrKxDbzhbg/mqdefault.jpg' /> */}
      <Header
        title="اهلا بكم الى كورساتي"
        subTitle="طور نفسك واصبح من المجموعة الافضل"
      />
      <GategoryPicker
        items={gategories}
        onChange={(data) => setGategory(data.id)}
      />
      <Container>
        <View display="flex" flexWrap="wrap" justifyContent="center">
          {videos.map((data, index) => (
            <View key={index} m={20}>
              <Card
                videoId={data.id}
                image={`https://img.youtube.com/vi/${data.id}/maxresdefault.jpg`}
                smallImage={`https://img.youtube.com/vi/${data.id}/mqdefault.jpg`}
                title="complete html guied"
                subTitle="how to get well in html language and ne senior developer"
              />
            </View>
          ))}
        </View>
      </Container>
      <NoteStripe
        bgColro={colors.gold}
        title="Enjoy more than 30 courses with +1000 students"
        subtitle="Educate your self to be one of the top best and control you life"
      />
      {/* {videos.map(data=><Youtube videoId={data.id}/>)} */}
    </>
  );
}
