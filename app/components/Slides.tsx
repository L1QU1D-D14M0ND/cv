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

  useEffect(() => {
    fetch("/proyectos.json")
      .then((response) => response.json())
      .then((data) => {
        setContenido(data);
      })
      .catch((err) => console.error("Error al cargar contenido:", err));
  }, []);

  return (
    <div className="slides">
      <Swiper
        className="center"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
      >
        {contenido.map((p,index) =>
          p.destacado === true ? (
            <SwiperSlide key={p.id}>
              <ItemProyecto item={p}></ItemProyecto>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
}
