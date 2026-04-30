import "bootstrap/dist/css/bootstrap.min.css";
// import BookList from './components/BookList'
import scifiBooks from "./Components/data/scifi.json";
import romanceBooks from "./Components/data/romance.json";
import fantasyBooks from "./Components/data/fantasy.json";
import horrorBooks from "./Components/data/horror.json";
import historyBooks from "./Components/data/history.json";
import SingleBook from "./Components/Singlebook";
import BookList from "./Components/Booklist";

function App() {
  return (
    <>
      <BookList libri={historyBooks} />
      <BookList libri={fantasyBooks} />
      <BookList libri={horrorBooks} />
      <BookList libri={scifiBooks} />
      <BookList libri={romanceBooks} />
      {
        <BookList
          libri={[
            ...scifiBooks,
            ...romanceBooks,
            ...fantasyBooks,
            ...horrorBooks,
            ...historyBooks,
          ]}
        />
      }

      {
        <SingleBook
          title={scifiBooks[10].title}
          image={scifiBooks[10].img}
          price={scifiBooks[10].price}
        />
      }

      <BookList libri={horrorBooks} />
    </>
  );
}

export default App;
