import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {books.map((libro) => (
          <Col xs={12} md={4} lg={3} key={libro.asin}>
            <SingleBook libro={libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
