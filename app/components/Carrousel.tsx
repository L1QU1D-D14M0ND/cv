import { Card, Heading, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slides from "./Slides";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrousel() {
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
        <Heading>Destacado</Heading>
      </Card.Header>
      <Card.Footer className="justify-center" >
        <Skeleton loading={load} >
          <Slides ></Slides>
        </Skeleton>
      </Card.Footer>
    </Card.Root>
  );
}

export default Carrousel;
