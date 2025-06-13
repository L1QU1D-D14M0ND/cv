import { useEffect, useState } from "react";
import ItemProyecto from "./ItemProyecto";

function ProyectosFiltrados({
  items = [
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
  ],
  filtrar = false,
  filtrado = [
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
  ],
}) {
  if (filtrar === false) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-1 justify-items-center">
        {items.map((i, index) => (
          <ItemProyecto key={index} item={i}></ItemProyecto>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-1 justify-items-center">
      {filtrado.map((i, index) => (
        <ItemProyecto key={index} item={i}></ItemProyecto>
      ))}
    </div>
  );
}

export default ProyectosFiltrados;
