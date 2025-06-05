import { Card, Heading, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Carrousel() {

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
        <div>
        <Card.Root>
            <Card.Header className="padding" >
                <Heading size="3xl" >Carrousel</Heading>
            </Card.Header>
            <Card.Footer >
                <Skeleton asChild loading={load} >
                    <div className="sectionTinyRow" >
                        
                    </div>
                </Skeleton>
            </Card.Footer>
        </Card.Root>
        <Card.Root>
            <Card.Header className="padding" >
                <Heading size="3xl" >Indice</Heading>
            </Card.Header>
            <Card.Footer >
                <Skeleton asChild loading={load} >
                    <div className="sectionTinyRow" >
                        
                    </div>
                </Skeleton>
            </Card.Footer>
        </Card.Root>
        </div>
    );
}

export default Carrousel;