"use client";

import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";
export default function Home() {
  const [pictures, setPictures] = useState([]);
  const [id,setId] =useState(0)
  const handleAddPicture = () => {
    const randomSeed = Math.random(); 
    const newPicture = {
      id:id,
      img: `https://picsum.photos/200/300?random=${randomSeed}`, 
      thumbClicked: false,
    };
    setPictures([...picütures, newPicture]);
    setId(id+1)
  };
  const handleChange = (id) => {
    setPictures(pictures.map((picture) =>
      picture.id === id
        ? { ...picture, thumbClicked: !picture.thumbClicked }
        : picture
    ));

    
  };

  return (
    <div>
      <button onClick={handleAddPicture} className="button">Resim Ekle</button>
      <div className="pictures">
        {pictures.map((picture) => (
          <div key={crypto.randomUUID()}>
            <img
            id={id}
            onClick={() => handleChange(picture.id)}
              src={picture.img}
              className={"imgCustom"}
              alt="Uploaded"
            />
            <FaThumbsUp className={picture.thumbClicked ? "thumbClick" : "thumb"} />
          </div>
        ))}
      </div>
    </div>
  );
}
