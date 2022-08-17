

const Card = () => {

    return (
        <div className='card-container'>
            <div className='card-item card-image'>
                <img></img>
            </div>
            <h2 className='card-item card-title' >Item: </h2>
            <div className='card-item card-text'>
                <p>
                    Description:
                </p>
                <p>
                    Price: £
                </p>
                <button className='addButton'>Add to basket</button>

            </div>
        </div>
    )
}

export default Card