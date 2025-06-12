import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ItemProyecto from "./ItemProyecto";

export default function Slides() {
  const [contenido, setContenido] = useState([
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

  useEffect(() => {
    fetch("/proyectos.json")
      .then((response) => response.json())
      .then((data) => {
        setContenido(data);
      })
      .catch((err) => console.error("Error al cargar contenido:", err));
  }, []);

  return (
    <div className="flex justify-center justify-items-center opacityB rounded-lg paddingAround slides">
      <Swiper
        className="flex justify-center justify-items-center swiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
      >
        {contenido.map((p) =>
          p.destacado === true ? (
            <SwiperSlide className="flex justify-center justify-items-center" key={p.id}>
              <ItemProyecto item={p}></ItemProyecto>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
}
