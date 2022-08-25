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
    

    const fakeStore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setFake(jsonData)
        return {values: fake.url}
    }


    return (
        <div>
            {loggedIn ? 
        <div>
            <div className='log'>
            <button className='addButton' href='#' onClick={() => setShowBasket(true)}>View Basket</button>
            </div>
            {fake.map((values) => {
                return (
                    <div className='cards'>
                        <Card values={values} basket={basket} setBasket={setBasket}/>
                    </div>
                )
            })}

            <BasketModal onClose={() => setShowBasket(false)} showBasket={showBasket} basket={basket} setBasket={setBasket}/>
        </div>: 
        <div className='marketBlock'>
            <h2>You must be logged in to view the marketplace page.</h2>
        </div>}
        </div>
    )
}



export default Marketplace