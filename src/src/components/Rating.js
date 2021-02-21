import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../config/colors";
import View from "./View";
export default function Rating({ rating }) {
  const rateHandler = (rating) => {
    if (rating > 90) {
      return (
        <View display='flex' style={{width:'30%'}}>
          <FontAwesomeIcon size='sm' icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
        </View>
      );
    } else if (rating >= 70 && rating < 90) {
      return (
        <View>
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
        </View>
      );
    } else if (rating >= 50 && rating < 70) {
      return (
        <View>
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
        </View>
      );
    } else if (rating >= 30 && rating < 50) {
      return (
        <View>
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
        </View>
      );
    } else if (rating > 10 && rating < 30) {
      return (
        <View>
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.gold} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
        </View>
      );
    }
  };
  return <div >

    { rating ?  rateHandler(rating) :   <View display='flex' style={{filter:'blur(4px)' , width:'30%'}}>
          <FontAwesomeIcon icon={faStar} color={colors.light} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
          <FontAwesomeIcon icon={faStar} color={colors.light} />
        </View>}
    </div>;
}
