import React from "react";
import { faTh } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import View from "./View";
import { colors } from "../config/colors";
import Container from "./Container";

export default function Header({ title, subTitle, onClick, image }) {
  return (
    <div style={{ backgroundColor: colors.primary }} className="header-cont">
      <Container>
        {image && (
          <View
            style={{
              overFlow: "hidden",
              height: 250,
            }}
          >
            <img src={image} />
          </View>
        )}

        <View
          style={{
            position: image && "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={image && "rgba(0,0,0,.8)"}
        >
          <View
            className="flex--mobile--revers"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <View pv={2} flex={1} justifyContent="center" alignItems="center">
              <h1 className="heading color--white">{title}</h1>
              <p className="paragraph color--white">{subTitle}</p>
              {onClick && (
                <View
                  display="flex"
                  mv={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    rtl
                    icon={faTh}
                    label="مشاهدة الكورسات"
                    color={colors.primary}
                    rounded
                    onClick={() => {
                      console.log("clicked");
                    }}
                  />
                </View>
              )}
            </View>

            <View flex={1}>
              <img src="/study.svg" />
            </View>
          </View>
        </View>
      </Container>
    </div>
  );
}
