import { Heading, Progress } from "@chakra-ui/react";
import Idioma from "./Idioma";

function Idiomas() {
    return (
        <div className="sectionA" >
            <Heading rounded="xl" size="xl" className="leftColumn" >Idiomas:</Heading>
            <div className="column-section" >
                <ul>
                    <li>
                        <Idioma idioma="Castellano" nivelA={99} nivelB="Nativo" ></Idioma>
                    </li>
                    <li>
                        <Idioma idioma="Catalan" nivelA={90} nivelB="Avanzado" ></Idioma>
                    </li>
                    <li>
                        <Idioma idioma="Ingles" nivelA={90} nivelB="Avanzado" ></Idioma>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Idiomas;