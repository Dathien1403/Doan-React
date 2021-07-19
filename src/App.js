import "./App.css";
import About from "./Components/About";
import Logo from "./Components/Logo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./DB/ProductList";
import Menu from "./Components/Menu";
import Product from "./Components/Product";

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

const Home = () => (
  <div>
    <div className="header-main">
      <div className="circle">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  </div>
);

const BodyContent = () => (
  <div className="body-main">
    <div className="body-content">
      <h1 className="bd-content-1">
        Khám phá nền <br /> ẩm thực hiện đại
      </h1>
      <p className="bd-content-2">
        Cuộc sống bận rộn nhưng <br /> bạn cần một bữa ăn đầy đủ dưỡng chất ?
      </p>
      <p className="bd-content-button">Khám phá ngay nào!!</p>
    </div>
    <div className="pic">
      <img alt="imgcoke" className="parents" src="coke.png" width="450px" />
      <img alt="imgham" className="child" src="ham.png" width="450px" />
    </div>
  </div>
);

export default App;
