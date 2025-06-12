import { Heading } from "@chakra-ui/react";
import Idioma from "./Idioma";

function Idiomas() {
  return (
    <div className="opacityB rounded-xl paddingAround">
      <Heading rounded="xl" size="xl" className="leftColumn">
        Idiomas:
      </Heading>
      <div  >
        <ul className="w-full flex flex-col sm:flex-row justify-center sm:justify-around" >
          <li className="w-1/2 sm:w-1/4" >
            <Idioma idioma="Castellano" nivelA={99} nivelB="Nativo"></Idioma>
          </li>
          <li className="w-1/2 sm:w-1/4" >
            <Idioma idioma="Catalan" nivelA={90} nivelB="Avanzado"></Idioma>
          </li>
          <li className="w-1/2 sm:w-1/4" >
            <Idioma idioma="Ingles" nivelA={90} nivelB="Avanzado"></Idioma>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Idiomas;
