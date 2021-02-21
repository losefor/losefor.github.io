import React from "react";

import Avatar from "./Avatar";
import View from "./View";
export default function Comment({
  name,
  comment
}) {
  return (
    <View mv={1} display="flex">

      <View mh={.5}>
      <Avatar  letter={name} />
      </View>
      <div className="comment">
        <h5 className="comment__name">{name}</h5>
        <p className="comment__text">{comment}</p>
      </div>
    </View>
  );
}
