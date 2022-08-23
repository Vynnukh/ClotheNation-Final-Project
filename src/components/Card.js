import {useEffect, useState} from "react"

const Card = ({values, basket, setBasket}) => {

    const [card, setCard] = useState({})
    useEffect(() => {
        console.log("basket in useEffect: ", basket)
        setCard({
            values: values
        })
    }, [])
    const handleClick = () => {
        console.log("handleClick in card.js fired", values)
        console.log("Basket in card.js: ",basket)
        let shoppingCart = [values] 
        console.log("Shopping cart:", shoppingCart)
        // shoppingCart.push(values)
        setBasket((prev) => [...prev, ...shoppingCart] )
        console.log("Basket in card.js: ",basket)
    }
// console.log("Values: ", values)
    return (
            <div className='card-container'>
                <div className='card-image'>
                    <img src={values.image}></img>
                </div>
                <div className="card-text">
                    <h3>{values.title}</h3>
                    <div>
                        <p>
                            {values.description}
                        </p>
                        <p>
                            £{values.price}
                        </p>
                        <button className='addButton' onClick={handleClick}>Add to basket</button>
                    </div>
                </div>
            </div>
    )
}

export default Card