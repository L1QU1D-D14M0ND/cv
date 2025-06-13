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
    id: 0,
    nombre: "",
    descripcion: "",
    imagen: "",
    destacado: false,
    dificultad: 0,
    tecnologias: [""],
    tiempo: "",
    github: "",
  }
}) {
  return (
    <Card.Root className="w-79 h-90">
      <Image src={item.imagen} alt={item.imagen} />
      <Card.Header> {item.nombre} </Card.Header>
      <Card.Body>
        {item.descripcion}
        <p>
          {item.tecnologias.map((p,index) => (
            <Badge key={index}>{p}</Badge>
          ))}
        </p>
      </Card.Body>
      <Card.Footer>
        <RatingGroup.Root
          colorPalette="cyan"
          readOnly
          count={5}
          value={item.dificultad}
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
                <Dialog.Body className="flex justify-between flex-col">
                  <div>
                    <Image
                      rounded="xl"
                      src={item.imagen}
                      alt={item.imagen}
                    ></Image>
                    <div>
                      <Heading size="5xl">{item.nombre}</Heading>
                      <Heading size="2xl">
                        {" "}
                        {item.tecnologias.map((p, index) => (
                          <Badge key={index}>{p}</Badge>
                        ))}{" "}
                      </Heading>
                      <Text>{item.descripcion}</Text>
                      <p>Tiempo: {item.tiempo}</p>
                    </div>
                  </div>
                  <div className="flex direction-col justify-start">
                    <RatingGroup.Root
                      colorPalette="cyan"
                      readOnly
                      count={5}
                      value={item.dificultad}
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
                    <div>
                      <Link
                        className="marginAround"
                        variant="underline"
                        href={item.github}
                        target="_blank"
                      >
                        <Text>Github</Text>
                      </Link>
                      <Button variant="outline">Cerrar</Button>
                    </div>
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
