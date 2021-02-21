import React, { useState , useRef , useEffect } from "react";

export default function Image({ width = "100%", lowResImage, image }) {
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef()

  useEffect(()=>{
    if(imageRef.current.complete) setIsLoading(false)
  },[])
  return (
    <>
      {isLoading && <img style={{ filter: "blur(12px)", width }} src={lowResImage} />}
        <img ref={imageRef} onLoad={() => setIsLoading(false)} style={{ width , display : isLoading ? 'none' : 'block' }} src={image} />
    </>
  );
}
