import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    // fa il map di uno dei JSON
    return (
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {this.props.libri
            .filter((libro) => {
              if (
                libro.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((libro) => {
              return (
                <Col key={libro.asin}>
                  <SingleBook
                    image={libro.img}
                    title={libro.title}
                    price={libro.price}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
