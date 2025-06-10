import {
  Heading,
  Card,
  Flex,
  Combobox,
  Portal,
  Skeleton,
  createListCollection,
  Wrap,
  Badge,
  RatingGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ItemProyecto from "./ItemProyecto";

function ProyectosFiltrados(data: any) {
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

  return <Flex gap="4" wrap="wrap" justify="center"></Flex>;
}

export default ProyectosFiltrados;
