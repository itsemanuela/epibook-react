import { Container, Card, Col, Row, Button } from "react-bootstrap";
import libri from "../../horror.json";

const Arraydilibri = () => {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {libri.map((libro) => (
          <Col xs={12} md={4} lg={3} key={libro.asin}>
            <Card className="h-60 shadow-sm">
              <Card.Img
                variant="top"
                src={libro.img}
                style={{
                  height: "350px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{libro.title}</Card.Title>
                <Card.Text>
                  Prezzo: <strong>{libro.price}€</strong>
                </Card.Text>
                <Card.Text className="text-success fw-bold">
                  {" "}
                  {libro.category}
                </Card.Text>

                <Button variant="primary" className="mt-auto">
                  Acquista
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Arraydilibri;
