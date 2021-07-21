import "./App.css";
import About from "../src/Components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./Components/Product";
import Home from "../src/Components/Home";
import BodyContent from "../src/Components/BodyContent";
function App() {
  return (
    <Router>
      <Home />
      <Route path="/" exact component={BodyContent} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
    </Router>
  );
}
export default App;
