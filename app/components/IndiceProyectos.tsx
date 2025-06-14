import {
  Heading,
  Card,
  Combobox,
  Portal,
  createListCollection,
  Wrap,
  Badge,
  RatingGroup,
  Switch,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import ProyectosFiltrados from "./ProyectosFiltrados";
import { HiCheck, HiX } from "react-icons/hi";

function IndiceProyecto() {
  const [load, setLoad] = useState(true);

  const [items, setItems] = useState<any[]>([]);

  const [etiquetas, setEtiquetas] = useState<string[]>([]);

  useEffect(() => {
    fetch("/proyectos.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        data.forEach((i: any) => {
          for (let a of i.tecnologias) {
            if (!etiquetas.includes(a)) {
              etiquetas.push(a);
            }
          }
        });
        setLoad(false);
      })
      .catch((err) => console.error("Error al cargar contenido:", err));
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filteredItems = useMemo(
    () =>
      etiquetas.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const collection = useMemo(
    () => createListCollection({ items: filteredItems }),
    [filteredItems]
  );

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedSkills(details.value);
    handleFilter(stars);
  };

  const [stars, setStars] = useState(3);

  const [filtrar, setFiltrar] = useState(false);

  const [listaFiltrada, setListaFiltrada] = useState(
    items.filter((i) => i.dificultad <= stars)
  );

  const handleFilter = (s: number) => {
    if (selectedSkills.length < 1) {
      setListaFiltrada(items.filter((i) => i.dificultad <= s));
    } else {
      setListaFiltrada(
        items
          .filter((i) => i.dificultad <= s)
          .filter((i) => {
            for (let a of selectedSkills) {
              if (i.tecnologias.includes(a)) {
                return true;
              }
            }
            return false;
          })
      );
      console.log(listaFiltrada);
      console.log(
        listaFiltrada.filter((i) => {
          for (let a of selectedSkills) {
            if (i.tecnologias.includes(a)) {
              return true;
            }
          }
          return false;
        })
      );
    }
  };

  return (
    <Card.Root>
      <Card.Header>
        <Heading>Indice</Heading>
        <Combobox.Root
          openOnClick
          multiple
          closeOnSelect
          width="320px"
          value={selectedSkills}
          collection={collection}
          onValueChange={(details) => {
            handleValueChange(details);
            handleFilter(stars);
          }}
          onInputValueChange={(details) => {
            setSearchValue(details.inputValue);
            handleFilter(stars);
          }}
        >
          <Wrap gap="2">
            {selectedSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </Wrap>

          <Combobox.Label>Etiquetas</Combobox.Label>

          <Combobox.Control>
            <Combobox.Input />
            <Combobox.IndicatorGroup>
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>

          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.ItemGroup>
                  {filteredItems.map((i, index) => (
                    <Combobox.Item key={index} item={i}>
                      {i}
                      <Combobox.ItemIndicator />
                    </Combobox.Item>
                  ))}
                  <Combobox.Empty />
                </Combobox.ItemGroup>
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
        <RatingGroup.Root
          colorPalette="cyan"
          count={5}
          value={stars}
          onValueChange={(e) => {
            setStars(e.value);
            console.log(e.value);
            handleFilter(e.value);
          }}
        >
          Dificultad:
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <Switch.Root
          colorPalette="cyan"
          size="lg"
          onCheckedChange={(e) => {
            if (filtrar) {
              setFiltrar(false);
              handleFilter(stars);
            } else {
              setFiltrar(true);
              handleFilter(stars);
            }
          }}
        >
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb>
              <Switch.ThumbIndicator fallback={<HiX color="black" />}>
                <HiCheck />
              </Switch.ThumbIndicator>
            </Switch.Thumb>
          </Switch.Control>
          <Switch.Label>Filtrar</Switch.Label>
        </Switch.Root>
      </Card.Header>
      <Skeleton loading={load}>
        <Card.Body>
          <ProyectosFiltrados
            items={items}
            filtrar={filtrar}
            filtrado={listaFiltrada}
          ></ProyectosFiltrados>
        </Card.Body>
      </Skeleton>
    </Card.Root>
  );
}

export default IndiceProyecto;
