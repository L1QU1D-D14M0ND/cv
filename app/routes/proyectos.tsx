import type { MetaFunction } from "@remix-run/node";
import { Card } from "@chakra-ui/react";
import Perfil from "../components/Perfil";
import Header from "../components/Header";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import IndiceProyecto from "../components/IndiceProyectos";

export const meta: MetaFunction = () => {
  return [{ title: "CV" }, { name: "", content: "" }];
};

export default function Index() {
  return (
    <div className="root">
      <Card.Root className="opacityA backdrop-invert backdrop-opacity-100 border-hidden">
        <Card.Header>
          <Perfil></Perfil>
          <hr></hr>
          <Header></Header>
          <hr></hr>
        </Card.Header>
        <Card.Header className="paddingTop">
          {/*<Carrousel></Carrousel>*/}
          <hr></hr>
          {/*<IndiceProyecto></IndiceProyecto>*/}
          <hr></hr>
        </Card.Header>
        <Card.Footer className="paddingTop">
          <Contacto></Contacto>
        </Card.Footer>
      </Card.Root>
      <Footer></Footer>
    </div>
  );
}
