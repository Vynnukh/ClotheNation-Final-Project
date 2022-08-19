import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import LoginSignUpModal from "./components/Modals/LoginSignUpModal.js"
import { useState } from 'react';
import { Header1 } from './styles/Header.style'
import './App.css';
import { Navlinks, Li1, NavBar1, LinkStyle } from './styles/Navlinks.style.js';
import { Button } from './styles/Button.style';
import { H1, P1 } from './styles/Text.style';
import { Divhome, Divlogo, Divpic } from './styles/Divhome.style';
import c1 from './logo/c1.png';
import l from './logo/l.png';
import o from './logo/o.png';
import t from './logo/t.png';
import h from './logo/h.png';
import e from './logo/e.png';
import mod from './logo/mod.jpg';
import n from './logo/n.png';
import a from './logo/a.png';
import t2 from './logo/t.png';
import i from './logo/i.png';
import o2 from './logo/o.png';
import n2 from './logo/n.png';
import photo2 from './logo/photo2.jpg';
import photo from './logo/photo.jpg';


function App(props) {

  const [show, setShow] = useState(false)
  // const [login, setLogin] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)


const GlobalStyle = createGlobalStyle`
    body {
      
    }
`;

return (
  
    <div className="App">

      <GlobalStyle />
      

      <BrowserRouter>
      <NavBar1>
        <Header1>
          <Divlogo>
          <img src={c1} className="App-logoc1" alt="logo" />
          <img src={l} className="App-logol" alt="logo" />
          <img src={o} className="App-logoo" alt="logo" />
        <img src={t} className="App-logot" alt="logo" />
        <img src={h} className="App-logoh" alt="logo" />
        <img src={e} className="App-logoe" alt="logo" />
        <img src={mod} className="App-logomod" alt="logo" />
        <img src={n} className="App-logon" alt="logo" />
        <img src={a} className="App-logoa" alt="logo" />
        <img src={t2} className="App-logot2" alt="logo" />
        <img src={i} className="App-logoi" alt="logo" />
        <img src={o2} className="App-logoo2" alt="logo" />
        <img src={n2} className="App-logon2" alt="logo" />
          </Divlogo>
          <Navlinks>
            <Li1><Link to="/"><a>Home</a></Link></Li1>
            <Li1><Link to="/Account"><a>Account</a></Link></Li1>
            <Li1><Link to="/Marketplace"><a>Marketplace</a></Link></Li1>
            
          </Navlinks>
          <a href="#" id='open-button' onClick={() => setShow(true)}><Button><a>LogIn</a></Button></a>
        </Header1>
        
        

        <LoginSignUpModal title = "Login/SignUp" onClose = {() => setShow(false)} show = {show} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      </NavBar1>
      <Routes>
        <Route path='/' element = {<Home loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path='/Account' element = {<Account/>}></Route>
        <Route path='/Marketplace' element = {<Marketplace/>}></Route>
      </Routes>
      </BrowserRouter>
      <Divpic>
      <img src= {photo2} alt="girls2"/>
      <img src= {photo} alt="girls"/>
    </Divpic>
    </div>
    
  );
}

export default App;

