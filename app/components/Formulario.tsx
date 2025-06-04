import { Skeleton, Text, Link, Dialog, Button, CloseButton, Field, Fieldset, Stack, Input, Textarea } from "@chakra-ui/react";
import { BsFillTelephoneFill, BsMailbox2, BsGlobe2 } from "react-icons/bs";
import { useEffect, useState } from "react";

function Contacto() {
    const [load, setLoad] = useState(true);

    // This will run one time after the component mounts
    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            // do something else
            setLoad(false);
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
            <Skeleton asChild loading={load} >
                <Dialog.Root placement="center" motionPreset="slide-in-bottom" >
                    <Dialog.Trigger asChild >
                            <Button >
                                <BsGlobe2></BsGlobe2>
                                <Text>Formulario de contacto</Text>
                            </Button>
                    </Dialog.Trigger>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.CloseTrigger />
                            <Dialog.Header>
                                <Dialog.Title >Contacto</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body >
                                <Fieldset.Root size="lg" maxW="md">
                                    <Stack>
                                        <Fieldset.Legend>Formulario de contacto</Fieldset.Legend>
                                        <Fieldset.HelperText>
                                            Porfavor inscribe tus detalles de contacto.
                                        </Fieldset.HelperText>
                                    </Stack>
                                    <Fieldset.Content>
                                        <Field.Root>
                                            <Field.Label>Nombre</Field.Label>
                                            <Input name="name" />
                                        </Field.Root>
                                        <Field.Root required>
                                            <Field.Label>
                                                Email
                                                <Field.RequiredIndicator />
                                            </Field.Label>
                                            <Input placeholder="me@example.com" />
                                        </Field.Root>
                                        <Field.Root>
                                            <Field.Label>Mensaje</Field.Label>
                                            <Textarea name="message" />
                                        </Field.Root>
                                    </Fieldset.Content>
                                </Fieldset.Root>
                            </Dialog.Body>
                            <Dialog.Footer >
                                <Dialog.ActionTrigger asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </Dialog.ActionTrigger>
                                <Dialog.ActionTrigger asChild>
                                    <Button type="submit" size="sm" >
                                        Enviar
                                    </Button>
                                </Dialog.ActionTrigger>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Dialog.Root>
            </Skeleton>
    )
}

export default Contacto;
