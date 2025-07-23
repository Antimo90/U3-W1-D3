import { Component } from "react";
import SingleBook from "./SingleBook";
import { Row, Col, Container } from "react-bootstrap";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <Container className="mt-5">
        <Row className="g-4">
          {books.map((book) => (
            <Col
              xs={12}
              md={6}
              lg={3}
              key={book.asin}
              className="d-flex align-items-stretch"
            >
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
