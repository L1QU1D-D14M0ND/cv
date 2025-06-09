import {
  Heading,
  Card,
  Flex,
  Combobox,
  Portal,
  Skeleton,
  createListCollection,
  Wrap,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import ItemProyecto from "./ItemProyecto";
import { stringify } from "postcss";

function IndiceProyecto() {
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

  const [contenido, setContenido] = useState([
    {
      id: 0,
      nombre: "",
      descripcion: "",
      imagen: "",
      destacado: false,
      dificultad: 0,
      tecnologias: [""],
      tiempo: "",
      github: "",
    },
  ]);

  let tecnologias: string[] = [];

  useEffect(() => {
    fetch("/proyectos.json")
      .then((response) => response.json())
      .then((data) => {
        setContenido(data);
      })
      .catch((err) => console.error("Error al cargar contenido:", err));
  });

  contenido.forEach((p) => {
    for (let a in p.tecnologias) {
      if (!tecnologias.includes(a)) {
        tecnologias.push(a);
      }
    }
  });

  const [searchValue, setSearchValue] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filteredItems = useMemo(
    () =>
      tecnologias.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const collection = useMemo(
    () => createListCollection({ items: filteredItems }),
    [filteredItems]
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedSkills(details.value);
  };

  return (
    <Card.Root>
      <Card.Header>
        <Heading>Indice</Heading>
        <div>
          <Combobox.Root
            multiple
            closeOnSelect
            width="320px"
            value={selectedSkills}
            collection={collection}
            onValueChange={handleValueChange}
            onInputValueChange={(details) => setSearchValue(details.inputValue)}
          >
            <Wrap gap="2">
              {selectedSkills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))}
            </Wrap>

            <Combobox.Label>Busca etiquetas</Combobox.Label>

            <Combobox.Control>
              <Combobox.Input />
              <Combobox.IndicatorGroup>
                <Combobox.Trigger />
              </Combobox.IndicatorGroup>
            </Combobox.Control>

            <Portal>
              <Combobox.Positioner>
                <Combobox.Content>
                  <Combobox.ItemGroup>
                    <Combobox.ItemGroupLabel>Etiquetas</Combobox.ItemGroupLabel>
                    {filteredItems.map((item, index) => (
                      <Combobox.Item key={index} item={item}>
                        {item}
                        <Combobox.ItemIndicator />
                      </Combobox.Item>
                    ))}
                    <Combobox.Empty>Ninguna etiqueta encontrada</Combobox.Empty>
                  </Combobox.ItemGroup>
                </Combobox.Content>
              </Combobox.Positioner>
            </Portal>
          </Combobox.Root>
        </div>
      </Card.Header>
      <Skeleton loading={load}>
        <Card.Body>
          <Flex gap="4" wrap="wrap" justify="center">
            {contenido.map((p, index) => (
              <ItemProyecto item={p} key={index}></ItemProyecto>
            ))}
          </Flex>
        </Card.Body>
      </Skeleton>
    </Card.Root>
  );
}

export default IndiceProyecto;
