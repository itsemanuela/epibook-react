import { useState } from "react";
import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Container className="mt-4">
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Benvenuti in Epibook!</Alert.Heading>
          <p>
            Esplora la nostra collezione di libri. Qui trovi tutto quello che
            cerchi per la tua lettura.
          </p>
          <hr />
          <p className="mb-0">
            Sottotitolo: La tua libreria di fiducia online.
          </p>
        </Alert>
      </Container>
    );
  }

  return null;
};

export default Welcome;
