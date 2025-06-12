import { Skeleton, Text, Dialog, Button, CloseButton } from "@chakra-ui/react";
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

  const [open, setOpen] = useState(false);

  function isEmailValid(email: string): boolean {
    const validEmailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*.?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) return false;

    const validComs = [
      "com",
      "cat",
      "org",
      "net",
      "es",
      "jp",
      "academy",
      "college",
      "education",
      "edu",
      "school",
      "agency",
      "business",
      "management",
      "marketing",
      "partners",
      "beauty",
      "family",
      "fashion",
      "men",
      "singles",
      "vision",
      "dental",
      "doctor",
      "health",
      "hospital",
      "support",
      "surgery",
      "cash",
      "credit",
      "finance",
      "gold",
      "investments",
      "money",
      "bike",
      "fitness",
      "football",
      "hockey",
      "soccer",
      "yoga",
      "amsterdam",
      "barcelona",
      "bayern",
      "berlin",
      "london",
      "paris",
      "app",
      "computer",
      "email",
      "network",
      "systems",
      "technology",
    ];

    const emailParts = email.trim().split("@");

    if (emailParts.length !== 2) return false;

    const account = emailParts[0];
    const domain = emailParts[1];

    if (account.length > 64) return false;
    else if (domain.length > 255) return false;

    const domainParts = domain.split(".");

    if (domainParts.some((part) => part.length > 63)) return false;

    if (!validComs.includes(domainParts[domainParts.length - 1])) return false;

    return validEmailRegex.test(email);
  }

  return (
    <Skeleton asChild loading={load}>
      <Dialog.Root
        placement="center"
        motionPreset="slide-in-bottom"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
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
              <form
                id="contact-form"
                name="mail"
                onSubmit={(event) => {
                  event.preventDefault();

                  const formData = {
                    name: event.currentTarget.e.value,
                    email: event.currentTarget.n.value,
                    message: event.currentTarget.m.value,
                  };

                  console.log(formData);

                  const vMail = isEmailValid(event.currentTarget.e.value);

                  console.log(vMail);

                  /*emailjs
                    .send(
                      "service_stm52bn",
                      "template_x77c60x",
                      formData,
                      "0MGgI_7dgt1-Mn5hx"
                    )
                    .then(
                      function (response: EmailJSResponseStatus) {
                        console.log("SUCCESS!", response.status, response.text);
                      },
                      function (error: Error) {
                        console.log("FAILED...", error);
                      }
                    );*/

                  setOpen(false);
                }}
                className="flex flex-col marginAround"
              >
                <label className="marginAround" >Name: </label>
                <input className="marginAround bg-sky-100" type="text" name="n" required></input>
                <label className="marginAround" >Email: </label>
                <input className="marginAround bg-sky-100" type="email" name="e" required></input>
                <label className="marginAround" >Message: </label>
                <input className="marginAround bg-sky-100" type="text" name="m" required></input>
                <button type="submit" className="marginAround">
                  Enviar
                </button>
              </form>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" className="marginAround">
                  Cancelar
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger></Dialog.ActionTrigger>
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
