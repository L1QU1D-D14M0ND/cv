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
  RatingGroup,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import ProyectosFiltrados from "./ProyectosFiltrados";

function IndiceProyecto() {
  const [load, setLoad] = useState(true);

  const [items, setItems] = useState<any[]>([
    {
      id: 1,
      nombre: "TaskBoard Pro",
      descripcion: "Aplicación de gestión de tareas con arrastrar y soltar.",
      imagen: "https://source.unsplash.com/400x300/?project,kanban",
      destacado: true,
      dificultad: 4,
      tecnologias: ["React", "Node.js", "MongoDB"],
      tiempo: "medio",
      github: "https://github.com/usuario/taskboard-pro",
    },
  ]);

  const [etiquetas, setEtiquetas] = useState<string[]>([]);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      // do something else
      setLoad(false);
    };

    fetch("/proyectos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        data.forEach((i: any) => {
          for (let a of i.tecnologias) {
            if (!etiquetas.includes(a)) {
              setEtiquetas(etiquetas.concat([a]));
              console.log(a);
            }
          }
        });
      })
      .catch((err) => console.error("Error al cargar contenido:", err));

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filteredItems = useMemo(
    () =>
      etiquetas.filter((item) =>
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
            {selectedSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </Wrap>

          <Combobox.Label>Etiquetas</Combobox.Label>

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
                  {filteredItems.map((item) => (
                    <Combobox.Item key={item} item={item}>
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
      </Card.Header>
      <Skeleton loading={load}>
        <Card.Body>
          <ProyectosFiltrados items={items}></ProyectosFiltrados>
        </Card.Body>
      </Skeleton>
    </Card.Root>
  );
}

export default IndiceProyecto;
