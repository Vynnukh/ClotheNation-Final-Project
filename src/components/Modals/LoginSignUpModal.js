import { useEffect} from "react"
import SignUp from "../CRUDoperations/SignUp.js"
import {Login} from "../CRUDoperations/Login.js"
import "../../App.css"

const LoginSignUpModal = (props, setUser, setLoggedIn) => {

    // const [user, setUser] = useState()
    // const [loggedIn, setLoggedIn] = useState()

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
    }, )

    return(
        <div className="modalStyle">
            <div className={`modal ${props.show ? "show" : ""}`}>
                <div className="modal-content" onClick={x => x.stopPropagation()}>
                <div className="modal-header">
                    <h3>{props.title}</h3>
                    <br></br>
                    <button onClick={props.onClose}>Close</button>
                    <br></br>
                </div>
                <div className="modal-body">
                    
                    
                        <div>
                            <p>Sign up or login to access your account</p>
                                <h3>Sign up here:</h3>
                                <br></br>
                                <SignUp setUser = {setUser} setLoggedIn = {setLoggedIn}/>
                                <br></br>
                                <h3>Or</h3>
                                <Login setUser = {setUser} setLoggedIn = {setLoggedIn}/>
                        
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