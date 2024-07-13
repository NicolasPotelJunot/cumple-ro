import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import imagen1 from "./1.jpg";
import imagen2 from "./2.jpg";
import imagen3 from "./3.jpg";
import imagen4 from "./4.jpg";
import imagen5 from "./5.jpg";
import imagen6 from "./6.jpg";
import imagen7 from "./7.jpg";
import imagen8 from "./8.jpg";
import imagen9 from "./9.jpg";
import imagen10 from "./10.jpg";
import imagen11 from "./11.jpg";
import imagen12 from "./12.jpg";

const images = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
  imagen11,
  imagen12,
];

export const Imagenes = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const animateImages = () => {
      imageRefs.current.forEach((img) => {
        anime({
          targets: img,
          translateX: () =>
            anime.random(-window.innerWidth / 2, window.innerWidth / 2),
          translateY: () =>
            anime.random(-window.innerHeight / 2, window.innerHeight / 2),
          easing: "easeInOutQuad",
          duration: 5000,
          complete: animateImages,
        });
      });
    };

    animateImages();
  }, []);

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          ref={(el) => (imageRefs.current[index] = el)}
          className="absolute"
          style={{ width: "38px", height: "38px" }}
        />
      ))}
    </div>
  );
};
