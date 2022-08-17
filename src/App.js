import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import { Header1 } from './styles/Header.style'
import './App.css';
import { Navlinks, Li1 } from './styles/Navlinks.style.js';
import { Button } from './styles/Button.style';
import { H1 } from './styles/Text.style';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Monofett', cursive;
        font-family: 'Inconsolata', monospace;
    }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <body>
      <BrowserRouter>
      <nav className="navBar">
        <Header1>
          <div>
            <H1>ClotheNation</H1>
          </div>
          <Navlinks>
            <Li1><Link to="/">Home</Link></Li1>
            <Li1><Link to="/Account">Account</Link></Li1>
            <Li1><Link to="/Marketplace">Marketplace</Link></Li1>
          </Navlinks>
          <a href="#"><Button>LogIn</Button></a>
        </Header1>
          
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
    </body>
    </div>
    
  );
}

export default App;
