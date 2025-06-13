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

import useWindowDimensions from "./hooks/useWindowDimensions";

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

  const component = () => {
    const { width } = useWindowDimensions();
    /* you can also use default values or alias to use only one prop: */
    // const { height: windowHeight = 480 } useWindowDimensions();

    if (width === null) {
      return 1280;
    }

    return width;
  };

  return (
    <div className="flex justify-center justify-items-center opacityB rounded-lg paddingAround slides">
      <Swiper
        className="flex justify-center justify-items-center swiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={ component() > 1280 ? 3 : 1 }
        autoplay
        navigation
        pagination={{ clickable: true }}
      >
        {contenido.map((i, index) =>
          i.destacado === true ? (
            <SwiperSlide
              className="flex justify-center justify-items-center"
              key={index}
            >
              <ItemProyecto item={i}></ItemProyecto>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
}
