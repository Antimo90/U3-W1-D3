import Card from "react-bootstrap/Card";

const MyFooter = function () {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>EpiBooks</Card.Title>
          <Card.Text>{new Date().getFullYear()}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyFooter;
