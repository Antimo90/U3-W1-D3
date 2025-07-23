import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";

import fantasy from "../src/data/fantasy.json";
import history from "../src/data/history.json";
import horror from "../src/data/horror.json";
import romance from "../src/data/romance.json";
import scifi from "../src/data/scifi.json";
import BookList from "./components/BookList";

function App() {
  const allBooksForBookList = [
    ...fantasy,
    ...history,
    ...horror,
    ...romance,
    ...scifi,
  ];
  return (
    <>
      <MyNav />;
      <Welcome />
      <BookList books={allBooksForBookList} />
      <MyFooter />
    </>
  );
}

export default App;
