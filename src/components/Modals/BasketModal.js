import {useEffect} from "react"
import "../../App.css"

const BasketModal = (props) => {
// console.log("props:", props)
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
                </div>
                <div className="modal-body">
                    {props.basket.map((values, index) => {
                        
                        return (
                            <div>
                                <BasketModalItem
                                basket={props.basket}
                                setBasket={props.setBasket}
                                values={values}
                                index={index}
                                />
                            </div>
                        )
                    }
                )
            }
                <button className="addButton" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

const BasketModalItem = ({basket, setBasket, values, index}) => {
    const handleClick = (index) => {
        let newBasketList = [...basket]
        newBasketList.splice(index, 1)
        setBasket(newBasketList)
    } 



    return (
        <div>
            <div className="basketModal">
                <div>
            <img className="modalImage" src={values.image}></img>
            </div>
            <h4>{values.title}</h4>
            £{values.price}
            <button className='addButton' onClick={() => handleClick(index)}>Remove Item</button>
            </div>
        </div>
        
    )
}


export default BasketModal;
