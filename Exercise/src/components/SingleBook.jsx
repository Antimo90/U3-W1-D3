import { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false, // 'selected' è inizialmente falso
  };
  render() {
    const { book } = this.props;
    const { selected } = this.state;
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col
              xs={12}
              md={12}
              lg={12}
              key={book.asin}
              className="mb-2 d-flex align-items-stretch"
            >
              <Card
                style={{
                  border: selected ? "3px solid red" : "none",
                  cursor: "pointer",
                }}
                onClick={() => this.setState({ selected: !selected })}
              >
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
          </Row>
        </Container>
      </>
    );
  }
}

export default SingleBook;
