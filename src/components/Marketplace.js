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
            <div className='log'>
            <a href='#' onClick={() => setShowBasket(true)}><img src='/Images/icons8-shopping-bag-24.png' alt='Shopping bag'></img></a>
            </div>
            {fake.map((values) => {
                return (
                    <div className='cards'>
                        <Card values={values} basket={basket} setBasket={setBasket}/>
                    </div>
                )
            })}

            <BasketModal title = "Basket" onClose={() => setShowBasket(false)} showBasket={showBasket} basket={basket} setBasket={setBasket}/>
        </div>: 
<<<<<<< HEAD
        <div className='marketBlock'>
            <h2>You must be logged in to view the marketplace page.</h2>
        </div>}
=======
        <div>
        <h1>Welcome to the Marketplace.</h1>
        <p>Please sign in to view this page.</p>
        </div>
        }
>>>>>>> 16569ed0dda00f1545bf5c468a97ed2eb7b3a5fa
        </div>
    )
}



export default Marketplace