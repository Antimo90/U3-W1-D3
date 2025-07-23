import { Component } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class BookList extends Component {
  render() {
    const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
    return <></>;
  }
}

export default BookList;
