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
import C222 from './logo/C222.png';
import l222 from './logo/l222.png';
import O2222 from './logo/O2222.png';
import t222 from './logo/t222.png';
import h222 from './logo/h222.png';
import e222 from './logo/e222.png';
import nmid from './logo/nmid.png';
import a2 from './logo/a2.png';
import ttwo from './logo/ttwo.png';
import i22 from './logo/i22.png';
import O33 from './logo/O33.png';
import n222 from './logo/n222.png';
import Mainpic  from './logo/images.js'
import mod5 from './logo/mod5.jpg'
import model10 from './logo/model10.jpg'
import mod40 from './logo/mod40.jpg'
import mod from './logo/mod.jpg'
import mod100 from './logo/mod100.jpg'
import mod200 from './logo/mod200.jpg'
import decor from './logo/decor.jpg'
import decor2 from './logo/decor2.jpg'
import cn from './logo/cn.png'



function App() {

  const [show, setShow] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")


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
      <div>
      
      <img src={decor} className="decor" alt="logo" />
      
      
      

      </div>
      <Divlogo>
      <img src={mod} className="piccy2" alt="logo" />
      <img src={mod100} className="piccy2" alt="logo" />
      <img src={mod5} className="piccy2" alt="logo" />
      <img src={mod40} className="piccy2" alt="logo" />
      <img src={model10} className="piccy2" alt="logo" />
      <img src={mod200} className="piccy2" alt="logo" />
      
      
          <img src={C222} className="App-logoc1" alt="logo" />
          <img src={l222} className="App-logol" alt="logo" />
          <img src={O2222} className="App-logoo" alt="logo" />
          <img src={t222} className="App-logot" alt="logo" />
          <img src={h222} className="App-logoh" alt="logo" />
          <img src={e222} className="App-logoe" alt="logo" />
          <img src={nmid} className="App-logon" alt="logo" />
          <img src={a2} className="App-logoa" alt="logo" />
          <img src={ttwo} className="App-logot2" alt="logo" />
          <img src={i22} className="App-logoi" alt="logo" />
          <img src={O33} className="App-logoo2" alt="logo" />
          <img src={n222} className="App-logon2" alt="logo" />
      <img src={model10} className="piccy2" alt="logo" />
      <img src={mod200} className="piccy2" alt="logo" />
      <img src={mod40} className="piccy2" alt="logo" />
      <img src={mod5} className="piccy2" alt="logo" />
      <img src={mod100} className="piccy2" alt="logo" />
      <img src={mod} className="piccy2" alt="logo" />
      
          </Divlogo>
          
          <div className="log">
          <img src={decor2} className="decor2" alt="logo" />
            {loggedIn ?
            <div>
            {/* <p1>Hello {user}!</p1> */}
            <a href="#" onClick={() => setShowLogout(true)}><Button><a>Log out</a></Button></a>
            </div>  
          :
          <a href="#" onClick={() => setShow(true)}><Button><a>Log-in</a></Button></a>
          }
          <img src={decor2} className="decor2" alt="logo" />
          </div>
      <div className="navBar">
        <Header1>
          <Navlinks>

            <ul className = "homerun"><li><Link exact to="/">Home</Link></li>
            <li><Link to="/ActivityFeed">Activity Feed</Link></li>
            <li> <Link to="/Account">Account</Link></li>
            <li><Link to="/Members">Members</Link></li>
            <li><Link to="/Marketplace">Marketplace</Link></li></ul>
          </Navlinks>
        </Header1>
        
        <LogoutModal  onClose = {() => (setShowLogout(false), setLoggedIn(false))} 
                      showLogout = {showLogout}
                      loggedIn = {loggedIn}
                      setLoggedIn = {setLoggedIn}
                      />


        <LoginSignUpModal   loggedIn={loggedIn} 
                            setLoggedIn={setLoggedIn} 
                            setUser={setUser} 
                            title="Login/SignUp" 
                            onClose={() => setShow(false)} 
                            show={show}
                            />
      </div>
      <Routes>
        <Route path='/' element = {<Home loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path="/ActivityFeed" element = {<ActivityFeed loggedIn={loggedIn}/>}></Route>
        <Route path='/Account' element = {<Account loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path="/Members" element = {<Members loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>}></Route>
        <Route path='/Marketplace' element = {<Marketplace loggedIn = {loggedIn}/>}></Route>
      </Routes>
      </BrowserRouter>
      <Mainpic/>
    </div>
    
  );
}

export default App;

