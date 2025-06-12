import { Heading, Text, Timeline } from "@chakra-ui/react";

function HistorialLaboral() {
    return (
        <div className="opacityB rounded-xl" >
            <Heading rounded="xl" className="bg-sky-200 paddingAround" size="2xl" >Experiencia:</Heading>
            <div className="paddingAround" >
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
                            <p> Practicas en empresa de FP en PC Box. </p>
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
                            <p> Trabajo como auxiliar de servicio en Banca March. </p>
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