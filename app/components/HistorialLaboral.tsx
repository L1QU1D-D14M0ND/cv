import { Heading, Text, Timeline } from "@chakra-ui/react";

function HistorialLaboral() {
    return (
        <div className="sectionA" >
            <Heading rounded="xl" className="leftColumn bg-sky-200" size="2xl" >Experiencia:</Heading>
            <div className="column-section" >
                <Timeline.Root>
                    <Timeline.Item>
                        <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator />
                        </Timeline.Connector>
                        <Timeline.Content>
                        <Timeline.Title >
                            <Heading >Actualidad</Heading>
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
                        <Timeline.Title >
                            <Heading >2024</Heading>
                            <Text> Practicas en empresa de FP en PC Box. </Text>
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
                        <Timeline.Title >
                            <Heading >2022 - 2024</Heading>
                            <Text> Trabajo como auxiliar de servicio en Banca March. </Text>
                        </Timeline.Title>
                        <Timeline.Description />
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline.Root>
            </div>
        </div>
    )
};

export default HistorialLaboral;