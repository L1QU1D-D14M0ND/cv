import Header from "../components/Header";
import Perfil from "../components/Perfil";
import Contacto from "../components/Contacto";
import Idiomas from "../components/Idiomas";
import Habilidades from "../components/Habilidades";
import { Card } from "@chakra-ui/react";

function Detalles() {
    return <div className="root" >
        <Card.Root className="opacityA backdrop-invert backdrop-opacity-100" >
            <Card.Header >
                <Perfil ></Perfil>
                <hr></hr>
                <Header ></Header>
                <hr></hr>
            </Card.Header>
            <Card.Header className="padding" >
                <Idiomas ></Idiomas>
                <hr></hr>
                <Habilidades ></Habilidades>
                <hr></hr>
            </Card.Header>
            <Card.Body >
                <Contacto ></Contacto>
            </Card.Body>
        </Card.Root>
    </div>
};

export default Detalles;