import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navBar">
        <div className='header'>
          <h1>ClotheNation</h1>
        </div>
        <div className='navItems'>
          <div className="homeBtn">
            <Link to="/">Home</Link>
          </div>
          <div className="accBtn">
            <Link to="/Account">Account</Link>
          </div>
          <div className="marketBtn">
            <Link to="/Marketplace">Marketplace</Link>
          </div>
        </div>
        <div>
          {/* This will be where Login the modal is (Once it is set up) */}
        </div>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/Account' element = {<Account/>}></Route>
        <Route path='/Marketplace' element = {<Marketplace/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
