import { Card, Image, RatingGroup, Link, Text, Button } from "@chakra-ui/react";

function ItemProyecto({
  item = {
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
        <RatingGroup.Root
          readOnly
          count={5}
          defaultValue={item.dificultad}
          size="sm"
        >
          <RatingGroup.HiddenInput />
          <RatingGroup.Label>Dificultad: </RatingGroup.Label>
          <RatingGroup.Control />
        </RatingGroup.Root>
        <p>Tiempo: {item.tiempo}</p>
      </Card.Footer>
      <Card.Footer>
        <Button asChild>
          <Link variant="underline" href={item.github}>
            <Text>Detalles</Text>
          </Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default ItemProyecto;
