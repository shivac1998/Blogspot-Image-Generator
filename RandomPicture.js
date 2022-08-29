import { useState, useEffect } from "react";

const imgUrl = "https://picsum.photos/325";

function RandomPictureGenerator() {
  const [img, setImg] = useState;

  const fetchImage = async () => {
    const res = await fetch(imgUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" />
    </>
  );
}

export default RandomPictureGenerator;
