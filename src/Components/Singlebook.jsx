import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Singlebook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card className={this.state.selected ? "shadow-lg" : ""}>
        <Card.Img
          variant="top"
          src={this.props.image}
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.price}</Card.Text>
          <Button variant="primary">Comprami!</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Singlebook;
