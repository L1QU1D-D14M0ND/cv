import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ItemProyecto from "./ItemProyecto";

function ProyectosFiltrados({
  items = [
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
  ],
  filtrar = false,
  dif = 0,
  filtrado = [
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
  ],
}) {
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

  const [listaFiltrada, setListaFiltrada] = useState(
    items.filter((i) => i.dificultad == dif)
  );

  if (filtrar == false) {
    return (
      <Flex gap="4" wrap="wrap" justify="center">
        {items.map((i) => (
          <ItemProyecto key={i.id} item={i}></ItemProyecto>
        ))}
      </Flex>
    );
  }

  return (
    <Flex gap="4" wrap="wrap" justify="center">
      {filtrado.map((i) => (
        <ItemProyecto key={i.id} item={i}></ItemProyecto>
      ))}
    </Flex>
  );
}

export default ProyectosFiltrados;
