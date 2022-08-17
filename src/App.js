import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Account from "./components/Account.js"
import Marketplace from "./components/Marketplace.js"
import { Header1 } from './styles/Header.style'
import { Titles } from './styles/Title.style'
import './App.css';
import { Navlinks, Li1, Navbar1 } from './styles/Navlinks.style.js';
import { Button, Button2 } from './styles/Button.style';
import { H1,H2 } from './styles/Text.style';
import stevepp3 from './styles/Images/stevepp3.jpg';
import { Divimg } from './styles/Divs.style';

function App() {
  return (
    <div className="App">
      <body>
      <BrowserRouter>
      <Navbar1>
        <Header1>
          <Divimg>
            <img src={stevepp3} alt='logo'/>
            </Divimg>
            <H1>Clothe Nation</H1>
          
          <Navlinks>
            <Li1><Link to="/"><H2>Home</H2></Link></Li1>
            <Li1><Link to="/Account"><H2>Account</H2></Link></Li1>
            <Li1><Link to="/Marketplace"><H2>Marketplace</H2></Link></Li1>
            
          </Navlinks>
          <a href="#"><Button>LogIn</Button></a>
          
        </Header1>
          
        <div>
          {/* This will be where Login the modal is (Once it is set up) */}
        </div>
      </Navbar1>
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
