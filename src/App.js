import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import LoginSignUpModal from "./components/Modals/LoginSignUpModal.js"
import { useState } from 'react';
import { Header1 } from './styles/Header.style'
import './App.css';
import { Navlinks, Li1 } from './styles/Navlinks.style.js';
import { Button } from './styles/Button.style';
import { H1 } from './styles/Text.style';


function App(props) {

  const [show, setShow] = useState(false)
  // const [login, setLogin] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)


  const GlobalStyle = createGlobalStyle`
      body {
          font-family: 'Monofett', cursive;
          font-family: 'Inconsolata', monospace;
      }
  `;

  return (
  
    <div className="App">

      <GlobalStyle />
      

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
          <a href="#" id='open-button' onClick={() => setShow(true)}><Button>LogIn</Button></a>
        </Header1>
        <div>
          <button id='open-button' onClick={() => setShow(true)}>Login/SignUp</button>
        </div>

        <LoginSignUpModal title = "Login/SignUp" onClose = {() => setShow(false)} show = {show} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      </nav>
      <Routes>
        <Route path='/' element = {<Home loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path='/Account' element = {<Account/>}></Route>
        <Route path='/Marketplace' element = {<Marketplace/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
    
  );
}

export default App;
