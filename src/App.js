import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import About from "./components/About";
import Contact from "./components/Contact";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route exact path="movie/:movieid" element={<MovieList />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
