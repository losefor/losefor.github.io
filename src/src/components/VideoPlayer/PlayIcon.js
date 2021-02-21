import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../config/colors";

export default function PlayIcon() {
  return (
    <div style={{ 
        // padding: "10px", 
        paddingLeft:'5px',
        backgroundColor: colors.primary , 
        width:'60px',
        height:'60px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%'
        }}>
      <FontAwesomeIcon color={"white"} icon={faPlay} size='4x' />
    </div>
  );
}
