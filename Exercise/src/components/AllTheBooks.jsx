import { Container, Row, Col, Button, Card } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    // 1. Combina tutti gli array di libri in un unico array
    const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
    return (
      <>
        <Container className="mt-5">
          <Row>
            {allBooks.map((book) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  lg={2}
                  key={book.asin}
                  className="mb-2 d-flex align-items-stretch"
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={book.img}
                      alt={book.title}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        Category: {book.category} <br />
                        Price: ${book.price}
                      </Card.Text>
                      <Button variant="primary" className="mt-auto">
                        View
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
