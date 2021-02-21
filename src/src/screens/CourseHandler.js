import React from "react";
import Screen from "../components/Screen";
import Container from "../components/Container";
import SidePicker from "../components/SidePicker";
import Picker from "../components/Picker";
import View from "../components/View";

export default function CourseHandler() {
  const items = [
    {
      title: "main",
    },
    {
      title: "course",
    },
    {
      title: "coupons",
    },
    {
      title: "share",
    },
  ];
  return (
    <Screen>
      <Container>
        <SidePicker onChange={(data) => console.log(data)} items={items}>
          <Picker />
        </SidePicker>
      </Container>
    </Screen>
  );
}
