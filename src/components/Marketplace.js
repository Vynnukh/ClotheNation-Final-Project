import Card from './Card';
import BasketModal from "./Modals/BasketModal.js";
import React,{useState,useEffect} from 'react';



const Marketplace = ({loggedIn}) => {

    const [showBasket, setShowBasket] = useState(false)
    const [basket, setBasket] = useState([])
    const [fake, setFake] = useState([]);
   
    useEffect(() => {
        fakeStore();
    },[])
    // console.log("fake: ", fake)
    

    const fakeStore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log(response)
        const jsonData = await response.json();
        console.log(jsonData);
        setFake(jsonData)
        return {values: fake.url}
    }
    // fakeStore();


    return (
        <div>
            {loggedIn ? 
        <div>
            <a href='#' onClick={() => setShowBasket(true)}><img src='/Images/icons8-shopping-bag-24.png' alt='Shopping bag'></img></a>
            {fake.map((values) => {
                return (
                    <div className='cards'>
                        <Card values={values} basket={basket} setBasket={setBasket}/>
                    </div>
                )
            })}

            <BasketModal title = "Basket" onClose={() => setShowBasket(false)} showBasket={showBasket} basket={basket} setBasket={setBasket}/>
        </div>: 
        <div>
           
        <h1>Welcome to ClotheNation</h1>
         <p1>Please Sign-Up or Login to browse the store</p1>
     </div>}
        </div>
    )
}



export default Marketplace