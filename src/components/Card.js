import {useEffect, useState} from "react"

const Card = ({values, basket, setBasket}) => {

    const [card, setCard] = useState({})
    useEffect(() => {
        setCard({
            values: values
        })
    }, [])
// console.log("card log",card)
    const handleClick = () => {
        let shoppingCart = [...basket]
        shoppingCart.push(card)
        setBasket(shoppingCart)
        
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
                        <button className='addButton' onClick={() => handleClick()}>Add to basket</button>
                    </div>
                </div>
            </div>
    )
}

export default Card