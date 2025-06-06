import { Link, Accordion, Heading, Skeleton } from "@chakra-ui/react";
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
    <div className="sectionA">
      <Accordion.Root collapsible rounded="xl" className="color1">
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            <Accordion.ItemIndicator />
            <Heading> Navegación </Heading>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody className="color2">
              <nav>
                <ul className="sectionTinyRow">
                  <li>
                    <Link variant="underline" href={home.current}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link variant="underline" href={formacion.current}>
                      Experiencia
                    </Link>
                  </li>
                  <li>
                    <Link variant="underline" href={experiencia.current}>
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

const item = {
  value: "info",
  title: "Product Info",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
};

export default Header;
