import {useEffect, useState} from "react"

const Card = ({values, basket, setBasket, image, title, description}) => {

    // const [value, setValue] = useState([])
    // useEffect(() => {
    //     setValue({
    //         image: image,
    //         title: title,
    //         description: description
    //     })
    // }, [])

    const handleClick = () => {
        let shoppingCart = [...basket]
        shoppingCart.push(values)
        setBasket(shoppingCart)
    }

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