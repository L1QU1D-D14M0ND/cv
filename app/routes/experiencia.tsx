import Header from "../components/Header";
import Perfil from "../components/Perfil";
import HistorialLaboral from "../components/HistorialLaboral";
import Contacto from "../components/Contacto";
import TextSectionA from "../components/TextSectionA";
import { Card } from "@chakra-ui/react";

function Experiencia() {
  return (
    <div className="root">
      <Card.Root className="opacityA backdrop-invert backdrop-opacity-100 marginAround">
        <Card.Header >
          <Perfil></Perfil>
          <hr></hr>
          <Header></Header>
          <hr></hr>
        </Card.Header>
        <Card.Header className="paddingTop">
          <TextSectionA></TextSectionA>
          <hr></hr>
          <HistorialLaboral></HistorialLaboral>
          <hr></hr>
        </Card.Header>
        <Card.Body className="paddingTop">
          <Contacto></Contacto>
        </Card.Body>
      </Card.Root>
    </div>
  );
}

export default Experiencia;
