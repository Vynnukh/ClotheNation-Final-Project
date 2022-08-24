import {useEffect, useState} from "react"

const Card = ({values, setBasket}) => {


    const handleClick = () => {
        let shoppingCart = [values]
        // shoppingCart.push(values)
        setBasket((prev) => [...prev, ...shoppingCart] )
    }
// console.log("Values: ", values)
    return (
            <div className='card-container'>
                <div className="card-text">
                <img className="card-image" src={values.image}></img>
                    <h4>{values.title}</h4>
                    <div>
                        <p>
                            {/* {values.description} */}
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