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

  if (filtrar == false) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-1 justify-items-center">
        {items.map((i) => (
          <ItemProyecto key={i.id} item={i}></ItemProyecto>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-1 justify-items-center">
      {filtrado.map((i) => (
        <ItemProyecto key={i.id} item={i}></ItemProyecto>
      ))}
    </div>
  );
}

export default ProyectosFiltrados;
