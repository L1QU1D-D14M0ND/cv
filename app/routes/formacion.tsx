import Header from "../components/Header";
import Perfil from "../components/Perfil";
import Estudios from "../components/Estudios";
import Contacto from "../components/Contacto";
import { Card } from "@chakra-ui/react";

function formacion() {
    return <div className="root" >
        <Card.Root className="opacityA backdrop-invert backdrop-opacity-100" >
          <Card.Header >
            <Perfil ></Perfil>
            <hr></hr>
            <Header ></Header>
            <hr></hr>
          </Card.Header>
          <Card.Header className="padding" >
            <Estudios ></Estudios>
            <hr></hr>
          </Card.Header>
          <Card.Body >
              <Contacto ></Contacto>
          </Card.Body>
        </Card.Root>
  </div>
};

export default formacion;