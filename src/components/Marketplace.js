import Card from './Card';
import BasketModal from "./Modals/BasketModal.js";
import React,{useState,useEffect} from 'react';


const Marketplace = () => {

    const [showBasket, setShowBasket] = useState(false)
    const [basket, setBasket] = useState(false)
    const [fake, setFake] = useState([]);
    // const [card, setCard] = useState([])
    console.log(fake);
    useEffect(() => {
        fakeStore();
    },[])

    

    const fakeStore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log(response)
        const jsonData = await response.json();
        console.log(jsonData);
        setFake(jsonData)
    }
    // fakeStore();


    return (
        <div>
            <a href='#' onClick={() => setShowBasket(true)}>Basket</a>
            {fake.map((values) => {
                return (
                    <div className='cards'>
                        <Card values={values}/>
                    </div>
                )
            })}

            {/* <BasketModal title = "Basket" onClose={() => setShowBasket(false)} showBasket={showBasket} basket={basket} setBasket={setBasket}/> */}
        </div>
    )
}

export default Marketplace