import { Card, Image, RatingGroup } from "@chakra-ui/react";

function ItemProyecto({
  item = {
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
}) {
  return (
    <Card.Root className="card">
      <Image src={item.imagen} alt={item.imagen} />
      <Card.Header> {item.nombre} </Card.Header>
      <Card.Body>
        {item.descripcion}
        <p> {item.tecnologias.map((p) => p + " ")} </p>
      </Card.Body>
      <Card.Footer>
        <RatingGroup.Root readOnly count={5} defaultValue={item.dificultad} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Label>Dificultad: </RatingGroup.Label>
          <RatingGroup.Control />
        </RatingGroup.Root>
      </Card.Footer>
    </Card.Root>
  );
}

export default ItemProyecto;
