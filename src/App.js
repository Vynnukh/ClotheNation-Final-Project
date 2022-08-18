import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import LoginSignUpModal from "./components/Modals/LoginSignUpModal.js"
import Members from "./components/Members.js"
import LogoutModal from "./components/Modals/LogoutModal.js";
import { useState } from 'react';
import { Header1 } from './styles/Header.style'
import './App.css';
import { Navlinks, Li1 } from './styles/Navlinks.style.js';
import { Button } from './styles/Button.style';
import { H1 } from './styles/Text.style';



function App() {

  const [show, setShow] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
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
            <Li1><Link to="/Members">Members</Link></Li1>
            <Li1><Link to="/Marketplace">Marketplace</Link></Li1>
          </Navlinks>
          <a href="#" onClick={() => setShow(true)}><Button>LogIn</Button></a>
          
          <a href="#" onClick={() => setShowLogout(true)}><Button>Log out</Button></a>

        </Header1>
        
        <LogoutModal title = "Logout" onClose = {() => setShowLogout(false)} showLogout = {showLogout} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>

        <LoginSignUpModal title = "Login/SignUp" onClose = {() => setShow(false)} show = {show} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      </nav>
      <Routes>
        <Route path='/' element = {<Home loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path='/Account' element = {<Account loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path="/Members" element = {<Members loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path='/Marketplace' element = {<Marketplace loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
    
  );
}

export default App;
