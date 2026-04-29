import "./App.css";
import Navbar1 from "./Components/Navbar";
import Footer1 from "./Components/Footer";
import WelcomeAlert from "./Components/WelcomeAlert";
import Arraydilibri from "./Components/Arraydilibri";
import BookList from "./Components/Booklist";
import libri from "../horror.json";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header>
          {" "}
          <Navbar1 />
        </header>
        <WelcomeAlert />
        <main className="flex-grow-1">
          <Arraydilibri />
          <div>
            <BookList books={libri} />
          </div>
        </main>
        <footer className="text-center">
          <Footer1 />
        </footer>
      </div>
    </>
  );
}

export default App;
