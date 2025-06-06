import { Table, Heading, Card, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function IndiceProyecto() {
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
    <Card.Root>
      <Card.Header>
        <Heading>Indice</Heading>
      </Card.Header>
      <Card.Footer >

      </Card.Footer>
    </Card.Root>
  );
}

export default IndiceProyecto;
