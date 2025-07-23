import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <>
      {" "}
      <Alert variant="success">
        <Alert.Heading>Benvenuto nel nostro EpiBookShop!</Alert.Heading>
        <p className="mb-0">Scopri le ultime novità .</p>
      </Alert>
    </>
  );
};

export default Welcome;
