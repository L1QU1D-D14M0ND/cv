import { Heading, Text, Image } from "@chakra-ui/react";
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
    <div className="sectionA">
      <Image rounded="xl" alt="Foto de perfil" className="leftColumn"></Image>
      <div className="column-section">
        <Heading size="5xl"> Gustavo Tomás Rodriguez Varela </Heading>
        <Heading size="2xl"> Informatico </Heading>
        <Text>
          {" "}
          Bienvenido a mi curriculum web, aqui encontraras mis detalles
          laborales compactados en una aplicaión web que demeustra mis
          habilidades.{" "}
        </Text>
        <Text>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac leo
          vel velit pulvinar accumsan nec tincidunt leo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.{" "}
        </Text>
      </div>
    </div>
  );
}

export default Perfil;
