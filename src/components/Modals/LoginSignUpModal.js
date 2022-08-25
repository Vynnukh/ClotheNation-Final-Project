import { useEffect} from "react"
import SignUp from "../CRUDoperations/SignUp.js"
import {Login} from "../CRUDoperations/Login.js"
import "../../App.css"

const LoginSignUpModal = (props) => {
console.log("Props in login modal: ", props)


    const escapeKeyClose = (x) => {
        try {
        if((x.charCode || x.keyCode) === 27) {
            props.onClose()
        }} catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", escapeKeyClose)
        return function cleanup() {
            document.body.removeEventListener("keydown", escapeKeyClose)
        }
    }, [])
    return(
        <div className="modalStyle">
            
            <div className={`modal ${props.show ? "show" : ""}`} onClick={props.onClose}>
                {props.loggedIn ? props.onClose : ""}
                <div className="modal-content" onClick={x => x.stopPropagation()}>
                <div className="modal-header">
                    <br></br>
                    <button className="addButton" onClick={props.onClose}>Close</button>
                    <br></br>
                </div>
                <div className="modal-body">
                        <div className="centerModal">
                                <br></br>
                                <SignUp setUser = {props.setUser} setLoggedIn = {props.setLoggedIn} loggedIn = {props.loggedIn}/>
                                <br></br>
                                <Login setUser = {props.setUser} setLoggedIn = {props.setLoggedIn} loggedIn = {props.loggedIn}/>
                        </div>
                    
                </div>
                <div className="modal-footer">
                
                    
                </div>
                </div>
            </div>
        </div>
    )
    
}



export default LoginSignUpModal