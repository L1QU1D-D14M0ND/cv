import { Card, Heading, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Fetcher() {
  const [contenido, setContenido] = useState([
    { pagina: "Base", descripcion: "Plantilla" },
  ]);

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

  useEffect(() => {
    fetch("/contenido.json")
      .then((response) => response.json())
      .then((data) => {
        setContenido(data);
      })
      .catch((err) => console.error("Error al cargar contenido:", err));
  }, []);

  return (
    <Card.Root>
      <Card.Header className="padding">
        <Heading size="3xl">Contenido:</Heading>
      </Card.Header>
      <Card.Footer>
        <Skeleton asChild loading={load}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
            {contenido.map((detalles, index) => (
              <div key={index}>
                {" "}
                <Heading>{detalles.pagina}</Heading>{" "}
                <Text>{detalles.descripcion}</Text>{" "}
              </div>
            ))}
          </div>
        </Skeleton>
      </Card.Footer>
    </Card.Root>
  );
}

export default Fetcher;
