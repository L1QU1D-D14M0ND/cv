import { Link, Accordion, Heading } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

function Header() {
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

  const home = useRef("/");
  const experiencia = useRef("/experiencia");
  const formacion = useRef("/formacion");
  const proyectos = useRef("/proyectos");
  const detalles = useRef("/detalles");

  return (
    <div className="rounded-xl border-hidden">
      <Accordion.Root collapsible rounded="xl" className="bg-sky-200 border-hidden">
        <Accordion.Item value="" className="border-hidden">
          <Accordion.ItemTrigger className="bg-sky-200 border-hidden" >
            <Accordion.ItemIndicator />
            <Heading> Navegación </Heading>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="border-hidden" >
            <Accordion.ItemBody className="bg-sky-100 border-hidden">
              <nav className="border-hidden" >
                <ul className="flex flex-row justify-around">
                  <li>
                    <Link variant="underline" href={home.current}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link variant="underline" href={experiencia.current}>
                      Experiencia
                    </Link>
                  </li>
                  <li>
                    <Link variant="underline" href={formacion.current}>
                      Formación
                    </Link>
                  </li>
                  <li>
                    <Link variant="underline" href={proyectos.current}>
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link variant="underline" href={detalles.current}>
                      Detalles
                    </Link>
                  </li>
                </ul>
              </nav>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export default Header;
