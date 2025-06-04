import type { MetaFunction } from "@remix-run/node";
import { Card } from "@chakra-ui/react";
import Perfil from "../components/Perfil";
import Header from "../components/Header";
import TextSectionA from "../components/TextSectionA";
import Fetcher from "../components/Fetcher";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer"

export const meta: MetaFunction = () => {
  return [
    { title: "CV" },
    { name: "", content: "" },
  ];
};

export default function Index() {
  return <div className="root" >
      <Card.Root>
        <Card.Header >
          <Perfil ></Perfil>
          <hr></hr>
          <Header ></Header>
          <hr></hr>
        </Card.Header>
        <Card.Header className="padding" >
          <TextSectionA ></TextSectionA>
          <hr></hr>
          <Fetcher ></Fetcher>
          <hr></hr>
        </Card.Header>
        <Card.Body >
          <Contacto ></Contacto>
        </Card.Body>
      </Card.Root>
      <Footer ></Footer>
  </div>
}
