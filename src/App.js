import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Account">Account</Link>
        </div>
        <div>
          <Link to="/Marketplace">Marketplace</Link>
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
