import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import About from './Components/About';
import Procduct from './Components/Product';
import Item1 from './Components/Item1';
import Logo from './Components/Logo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductList from './DB/ProductList';

function App() {

  return (
    
    <Router>
    <div className="main">
      <Home/>
      <Route path="/" exact component={BodyContent}/>
      <Route path="/about" component={About}/>
      <Route path="/product" component={Procduct}/>
      <Route path="/item1" component={Item1}/>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>        
        <div className="header-main">
          <div className="circle">
            <div className="logo">
              <Logo/>
            </div>
          </div>
          <div>
            <Menu/>
          </div>
        </div>
  </div>
);

const BodyContent = () => (
  <div className="body-main">
  <div className="body-content">
    <h1 className="bd-content-1">Khám phá nền <br/> ẩm thực hiện đại</h1>
    <p className="bd-content-2">Cuộc sống bận rộn nhưng <br/> bạn cần một bữa ăn đầy đủ dưỡng chất ?</p>
    <p className="bd-content-button">Khám phá ngay nào!!</p>
  </div>
<div className="pic">
    <img className="parents" src="coke.png" width="450px"/>
    <img className="child" src="ham.png" width="450px"/>
  </div>
  <ProductList/>
</div>
);

export default App;
