import { Text, Link } from "@chakra-ui/react";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import Formulario from "../components/Formulario";

function Contacto() {
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
    <div className="flex flex-row justify-around opacityB rounded-xl w-full paddingAround">
      <Link variant="underline">
        <BsFillTelephoneFill></BsFillTelephoneFill>
        <Text>722 21 34 99</Text>
      </Link>
      <Link variant="underline">
        <BsMailbox2></BsMailbox2>
        <Text>tomrod04@gmail.com</Text>
      </Link>
      <Formulario></Formulario>
    </div>
  );
}

export default Contacto;
