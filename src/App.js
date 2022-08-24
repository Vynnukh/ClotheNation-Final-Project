import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import LoginSignUpModal from "./components/Modals/LoginSignUpModal.js"
import Members from "./components/Members.js"
import LogoutModal from "./components/Modals/LogoutModal.js";
import ActivityFeed from "./components/ActivityFeed.js";
import { useState, useEffect } from 'react';
import { Header1 } from './styles/Header.style'
import './App.css';
import { Navlinks, Li1 } from './styles/Navlinks.style.js';
import { Button } from './styles/Button.style';
import { Divlogo } from './styles/Divhome.style';
import c1 from './logo/c1.png';
import l from './logo/l.png';
import o from './logo/o.png';
import t from './logo/t.png';
import h from './logo/h.png';
import e from './logo/e.png';
import n from './logo/n.png';
import a from './logo/a.png';
import t2 from './logo/t.png';
import i from './logo/i.png';
import o2 from './logo/o.png';
import n2 from './logo/n.png';



function App() {

  const [show, setShow] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()
  //console.log("LoggedIn & SetLoggedIn in app.js: ", loggedIn, setLoggedIn)
  console.log("SetLoggedIn", setLoggedIn)
  useEffect(() => {
    (async() => {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}health`)
      const data = await res.json()
      console.log(data)
    })()
  }, [])

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
      <Divlogo>
          <img src={c1} className="App-logoc1" alt="logo" />
          <img src={l} className="App-logol" alt="logo" />
          <img src={o} className="App-logoo" alt="logo" />
          <img src={t} className="App-logot" alt="logo" />
          <img src={h} className="App-logoh" alt="logo" />
          <img src={e} className="App-logoe" alt="logo" />
          <img src={n} className="App-logon" alt="logo" />
          <img src={a} className="App-logoa" alt="logo" />
          <img src={t2} className="App-logot2" alt="logo" />
          <img src={i} className="App-logoi" alt="logo" />
          <img src={o2} className="App-logoo2" alt="logo" />
          <img src={n2} className="App-logon2" alt="logo" />
          </Divlogo>
          <div className="log">
            {loggedIn ?
          <a href="#" onClick={() => setShowLogout(true)}><Button><a>Log out</a></Button></a>
          :
          <a href="#" onClick={() => setShow(true)}><Button><a>LogIn</a></Button></a>
          }
          </div>
      <div className="navBar">
        <Header1>
          <Navlinks>

            <Li1><Link to="/"><a>Home</a></Link></Li1>
            <Li1><Link to="/ActivityFeed"><a>Activity Feed</a></Link></Li1>
            <Li1><Link to="/Account"><a>Account</a></Link></Li1>
            <Li1><Link to="/Members"><a>Members</a></Link></Li1>
            <Li1><Link to="/Marketplace"><a>Marketplace</a></Link></Li1>
          </Navlinks>
        </Header1>
        
        <LogoutModal  title = "Logout" 
                      onClose = {() => (setShowLogout(false), setLoggedIn(false))} 
                      showLogout = {showLogout}
                      loggedIn = {loggedIn}
                      setLoggedIn = {setLoggedIn}
                      />


        <LoginSignUpModal loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} title="Login/SignUp" onClose={() => setShow(false)} show={show}/>
      </div>
      <Routes>
        <Route path='/' element = {<Home loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path="/ActivityFeed" element = {<ActivityFeed loggedIn={loggedIn}/>}></Route>
        <Route path='/Account' element = {<Account loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path="/Members" element = {<Members loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path='/Marketplace' element = {<Marketplace loggedIn = {loggedIn}/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Divpic>
      <img src= {photo2} alt="girls2"/>
      <img src= {photo} alt="girls"/>
    </Divpic> */}
    </div>
    
  );
}

export default App;

