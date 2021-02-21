import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "./Image";

export default function Card({
  title,
  subTitle,
  author,
  smallImage,
  image,
  link,
}) {
 



  return (
    <Link href={link}>
      <div className="card-cont">
     <Image image={image} lowResImage={smallImage} />

        <div className="card-details">
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </Link>
  );
}
