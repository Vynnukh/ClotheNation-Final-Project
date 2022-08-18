

const Card = ({values}) => {

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
                        <button className='addButton'>Add to basket</button>
                    </div>
                </div>
            </div>
    )
}

export default Card