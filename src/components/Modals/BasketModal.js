import {useEffect} from "react"
import "../../App.css"

const BasketModal = (props) => {

    const escapeKeyClose = (v) => {
        if((v.charCode || v.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", escapeKeyClose)
        return function cleanup() {
            document.body.removeEventListener("keydown", escapeKeyClose)
        }
    }, [])

    return(
        <div className={`modal ${props.showBasket ? "showBasket" : ""}`} onClick={props.onClose}>
            <div className="modal-content" onClick={v => v.stopPropagation()}>
                <div className="modal-header">
                    <h3>{props.title}</h3>
                </div>
                <div className="modal-body">
                    {props.basket.map((card, index) => {
                        return (
                            <div>
                                <BasketModalItem
                                basket={props.basket}
                                setBasket={props.setBasket}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                index={index}/>
                            </div>
                        )

                    })}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

const BasketModalItem = ({basket, setBasket, image, title, description, index}) => {
    const handleClick = (index) => {
        let newBasketList = [...basket]
        newBasketList.splice(index, 1)
        setBasket(newBasketList)
    }

    return (
        <div>
            <div>
            <p>{title}</p>
            <p>{description}</p>
            </div>
            <button onClick={() => handleClick(index)}>Remove Item</button>
        </div>
        
    )
}


export default BasketModal;
