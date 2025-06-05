import { Heading, Timeline, Text } from "@chakra-ui/react";

function Estudios() {
  return (
    <div className="sectionA">
      <Heading rounded="xl" className="leftColumn" size="2xl">
        Formación:
      </Heading>
      <div className="column-section">
        <Timeline.Root>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <Heading>
                  {" "}
                  FP Grado Superior - Desarrollo de Aplicaciones Web - 1 Año{" "}
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac leo vel velit pulvinar accumsan nec tincidunt leo.
                </Text>
              </Timeline.Title>
              <Timeline.Description />
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <Heading>
                  {" "}
                  FP Grado Medio - Microsistemas Informaticos y Redes{" "}
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac leo vel velit pulvinar accumsan nec tincidunt leo.
                </Text>
              </Timeline.Title>
              <Timeline.Description />
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </div>
    </div>
  );
}

export default Estudios;
