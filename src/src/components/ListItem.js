import React from "react";
import View from "./View";
import Link from "next/link";
import Text from "./Text";

export default function ListItem({
  className,
  style,
  type,
  title,
  videoId,
  link = "",
  image,
  bgColor,
  subTitle,
  level,
  color,
}) {
  return (
    <>
      <Link href={link}>
        <div style={style} className={`list-item-cont ${className}`}>
          <View display="flex" alignItems="center">
            {image && (
              <View style={styles.imageCont}>
                <img
                style={styles.img}
                  className="list-item-image"
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                />
              </View>
            )}

            <View display="flex" flexDirection="column">
              <View style={styles.title}>
                <View display="flex" alignItems="center">
                  <Text color={color} type={type}>
                    {title}
                  </Text>
                  {level && (
                    <Text color={color} type={"body2"}>
                      ({level})
                    </Text>
                  )}
                </View>
                {subTitle && (
                  <p style={styles.desc}>
                    {subTitle}
                  </p>
                )}
              </View>
            </View>
          </View>
        </div>
      </Link>
      <style jsx>{`
        .list-item-cont {
          background-color: white;
          border-bottom:thin solid rgb(243, 243, 243);
          margin: 0;
          padding: 10px;
          cursor: pointer;
          transition:.3s;
        }

        .list-item-cont:hover {
          background-color: rgb(243, 243, 243);
          
        }

        .list-item-image {
          width: 107px;
          height: 60px;
          // padding: 10px;
          // border-radius:15p ;
        }
      `}</style>
    </>
  );
}

const styles = {
  // imageCont: {
  //   width: 50,
  //   height: 50,
  //   overflow: "hidden",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: "50%",
  // },
  title: {
    padding: "0px 10px",
  },
  desc:{
    margin:'0px',
    color:'rgba(0,0,0,0.5)'
  },
  img:{
    
  }
};
