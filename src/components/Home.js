import {useState, useEffect} from "react";
import { Divhome } from '../styles/Divhome.style';
import { H1,P1 } from '../styles/Text.style';
import mod from '../logo/mod.jpg';
const Home = () => {

    return (
        <Divhome>
           <img src={mod} className="App-logomod" alt="logo" /> 
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           <img src={mod} className="App-logomod" alt="logo" />
           
           <H1>Welcome to ClotheNation</H1>
            <P1>Please Sign-Up or Login to browse the store</P1>
        </Divhome>
    )
}

export default Home