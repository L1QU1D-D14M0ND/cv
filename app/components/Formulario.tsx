import {
  Skeleton,
  Text,
  Dialog,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { BsGlobe2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from "emailjs-com";

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
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const [mail, setMail] = useState({ "name": "", "email": "", "message": "" });

  return (
    <Skeleton asChild loading={load}>
      <Dialog.Root placement="center" motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>
          <Button>
            <BsGlobe2></BsGlobe2>
            <Text>Formulario de contacto</Text>
          </Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Header>
              <Dialog.Title>Contacto</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <form id="contact-form" name="mail">
                <label>Name</label>
                <input type="text" name="name" required></input>
                <label>Email</label>
                <input type="text" name="email" required></input>
                <label>Message</label>
                <input type="text" name="message" required></input>
              </form>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  type="submit"
                  size="sm"
                  onClick={function notify() {
                    setMail( { "name": mail.name, "email": mail.email.toLocaleLowerCase(), "message": mail.message } );
                    emailjs
                      .send(
                        "service_stm52bn",
                        "template_x77c60x",
                        mail,
                        "0MGgI_7dgt1-Mn5hx"
                      )
                      .then(
                        function (response: EmailJSResponseStatus) {
                          console.log(
                            "SUCCESS!",
                            response.status,
                            response.text
                          );
                        },
                        function (error: Error) {
                          console.log("FAILED...", error);
                        }
                      );
                  }}
                >
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
  );
}

export default Contacto;
