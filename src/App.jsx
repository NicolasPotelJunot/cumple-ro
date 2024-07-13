import "./App.css";
import "animate.css";

import { challenges } from "./arrays/challenges";
import { images } from "./arrays/imagenes";
import { Imagenes } from "./imagenes/Imagenes";

function App() {
  function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const randomImage = getRandomItem(images);
  const randomChallenge = getRandomItem(challenges);

  return (
    <>
      <div className="App w-screen h-screen flex justify-center items-center">
        <header className="App-header">
          <div className="card w-80 shadow-xl pt-5 bg-white animate__animated animate__bounceIn">
            <h1 className="w-full text-center mx-auto font-bold px-5 pb-5 text-xl">
              ¡¡¡Feliz cumple Rocha!!!
            </h1>
            <figure>
              <img src={`${randomImage}`} className="max-h-64"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title w-28 mx-auto font-bold">
                RETO: {randomChallenge.numero}
              </h2>
              <p className="text-center">{randomChallenge.reto}</p>
            </div>
          </div>
        </header>

        <Imagenes />
      </div>
    </>
  );
}

export default App;
