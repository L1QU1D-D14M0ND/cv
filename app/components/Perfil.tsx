import { Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Perfil() {
  const [load, setLoad] = useState(true);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      // do something else
      setLoad(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="flex flex-row">
      <img
        alt="Foto de perfil"
        className="aspect-square rounded-full bg-sky-200 shrink-0"
      ></img>
      <div className="">
        <h1 className="text-5xl font-bold subpixel-antialiased">
          Gustavo Tomás Rodriguez Varela
        </h1>
        <h2> Informatico </h2>
        <p>
          Bienvenido a mi curriculum web, aqui encontraras mis detalles
          laborales compactados en una aplicaión web que demeustra mis
          habilidades.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac leo
          vel velit pulvinar accumsan nec tincidunt leo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default Perfil;
