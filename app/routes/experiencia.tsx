import Header from "../components/Header";
import Perfil from "../components/Perfil";
import HistorialLaboral from "../components/HistorialLaboral";
import Contacto from "../components/Contacto";
import { Card } from "@chakra-ui/react";

function Experiencia() {
    return <div className="root" >
        <Card.Root>
            <Card.Header >
                <Perfil ></Perfil>
                <hr></hr>
                <Header ></Header>
                <hr></hr>
            </Card.Header>
            <Card.Header className="padding" >
                <HistorialLaboral ></HistorialLaboral>
                <hr></hr>
            </Card.Header>
            <Card.Body >
                <Contacto ></Contacto>
            </Card.Body>
        </Card.Root>
    </div>
    
};

export default Experiencia;