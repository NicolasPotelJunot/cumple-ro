import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import imagen1 from "./imagen1.jpg";
import imagen2 from "./imagen2.jpg";
import imagen3 from "./imagen3.jpg";
import imagen4 from "./imagen4.jpg";

const images = [imagen1, imagen2, imagen3, imagen4];

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
          duration: 4600,
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
          style={{ width: "50px", height: "50px" }}
        />
      ))}
    </div>
  );
};
