import {
  Card,
  Image,
  RatingGroup,
  Button,
  Badge,
  Dialog,
  Portal,
  CloseButton,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

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
    <Card.Root className="w-3xs flex justify-center">
      <Image src={item.imagen} alt={item.imagen} />
      <Card.Header> {item.nombre} </Card.Header>
      <Card.Body>
        {item.descripcion}
        <p>
          {" "}
          {item.tecnologias.map((p) => (
            <Badge key={p}>{p}</Badge>
          ))}{" "}
        </p>
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
        <Dialog.Root size="xl">
          <Dialog.Trigger asChild>
            <Button variant="outline" size="sm">
              Detalles
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title></Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <div className="sectionA">
                    <Image
                      rounded="xl"
                      src={item.imagen}
                      alt={item.imagen}
                      className="leftColumn"
                    ></Image>
                    <div className="column-section">
                      <Heading size="5xl">{item.nombre}</Heading>
                      <Heading size="2xl">
                        {" "}
                        {item.tecnologias.map((p) => (
                          <Badge key={p}>{p}</Badge>
                        ))}{" "}
                      </Heading>
                      <Text>{item.descripcion}</Text>
                      <p>Tiempo: {item.tiempo}</p>
                    </div>
                  </div>

                  <div className="sectionTinyRow" >
                    <Link variant="underline" href={item.github} target="_blank" >
                      <Text>Github</Text>
                    </Link>
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
                  </div>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline">Cerrar</Button>
                  </Dialog.ActionTrigger>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Card.Footer>
    </Card.Root>
  );
}

export default ItemProyecto;
