import React from "react";

import View from "./View";
import Text from "./Text";


export default function NoteStripe({
  children,
  title,
  subtitle,
  color,
  bgColro,
}) {
  return (
    <View 
    pv={5}
     backgroundColor={bgColro}
     alignItems='center'
     style={{color}}
     >
     <View  pv={1}>
        <h1  className='heading text--center color--white'>
          {title}
        </h1> 
      </View>
      <p className='paragraph text--center color--white'>
        {subtitle}
      </p>
    </View>
  );
}
