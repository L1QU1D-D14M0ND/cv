import { Table, Heading, Card, For } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function IndiceProyecto() {
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

  const [contenido, setContenido] = useState([
    { id: -1, nombre: "", etiquetas: [""], descripcion: "Un juego de navegador de 3 en ralla" },
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
    <Card.Root>
      <Card.Header>
        <Heading>Indice</Heading>
      </Card.Header>
      <Card.Footer>
        <Table.Root>
          <Table.Header>
            <Table.ColumnHeader>Proyecto</Table.ColumnHeader>
            <Table.ColumnHeader>Descripcion</Table.ColumnHeader>
            <Table.ColumnHeader>Etiquetas</Table.ColumnHeader>
          </Table.Header>
          <Table.Body>
            {contenido.map((p) => (
              <Table.Row key={p.id}>
                <Table.Cell>{p.nombre}</Table.Cell>
                <Table.Cell>{p.descripcion}</Table.Cell>
                <Table.Cell>
                  <For each={p.etiquetas}>
                    {(item, index) => <p key={index}>{item}</p>}
                  </For>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card.Footer>
    </Card.Root>
  );
}

export default IndiceProyecto;
