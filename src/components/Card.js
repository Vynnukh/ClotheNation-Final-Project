

const Card = ({values}) => {

    return (
            <div className='card-container'>
                <div className='card-item card-image'>
                    <img src={values.image}></img>
                </div>
                <h2 className='card-item card-title' >Item: {values.title}</h2>
                <div className='card-item card-text'>
                    <p>
                        Description: {values.description}
                    </p>
                    <p>
                        Price: £{values.price}
                    </p>
                    <button className='addButton'>Add to basket</button>

                </div>
            </div>
    )
}

export default Card