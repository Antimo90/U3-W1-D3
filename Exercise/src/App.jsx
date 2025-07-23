import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import fantasy from "../src/data/fantasy.json";

function App() {
  const bookToDisplay = fantasy[0];
  return (
    <>
      <MyNav />;
      <Welcome />
      <SingleBook book={bookToDisplay} />
      <MyFooter />
    </>
  );
}

export default App;
