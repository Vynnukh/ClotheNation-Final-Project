import {useEffect} from "react"
import {useState} from "react"
import "../../App.css"

const BasketModal = (props) => {

    const [ total, setTotal ] = useState(0)

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
    

    function totalBasket() {

        let sum = 0
        for (let i = 0; i < props.basket.length; i++) {
          sum += parseInt(props.basket[i].price)
        }
        setTotal( sum )
      }

      useEffect(() => {
        totalBasket();
      }, [props.basket]);

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
                                {total ? <p>Total: £{total}.00</p> : <span></span>}
                            </div>
                        )
                    }
                )
            }
                </div>
                <button className="addButton" onClick={props.onClose}>Close</button>
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
