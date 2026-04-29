import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Card>
      <Card.Img src={book.img} />
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>{book.price}€</Card.Text>
      <Card.Text>{book.asin}</Card.Text>
      <Card.Text>{book.category}</Card.Text>
    </Card>
  );
};

export default SingleBook;
