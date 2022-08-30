import { useState, useEffect } from "react";
import "../App";

// const imgUrl = "https://picsum.photos/200/300?random=1";

// useEffect(() => {
//   inputRef.current.focus();
//   Axios.get("https://picsum.photos/200/300?random=1").then((res) => {
//     setimages(res.data);
//   });
// });

function RandomPictureGenerator() {
  const [url, setUrl] = useState("");
  function fetchImg() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(
        (res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Request Failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonRes) => {
        setUrl(jsonRes[0].url);
      });
  }
  return (
    <div className="imgMain">
      <img src={url} className="imgRandom" />
      <button className="imgBtn" onClick={fetchImg}>
        Generate!
      </button>
    </div>
  );
}

//     useEffect(() => {
//     inputRef.current.focus();
//     Axios.get("https://picsum.photos/200/300?random=1").then((res) => {
//       setimages(res.data);
//     });
//   });
// }

export default RandomPictureGenerator;
