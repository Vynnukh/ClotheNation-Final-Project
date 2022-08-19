import { useEffect } from "react"
import Logout from "../CRUDoperations/Logout.js"
import "../../App.css"

const LogoutModal = (props, setUser, setLoggedIn) => {

    const escapeKeyClose = (k) => {
        try {
            if ((k.charCode || k.keyCode) === 27) {
                props.onClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", escapeKeyClose)
        return function cleanup() {
            document.body.removeEventListener("keydown", escapeKeyClose)
        }
    }, [])

    return (
        <div className="modalStyle">
            <div className={`modal ${props.showLogout ? "showLogout" : ""}`} onClick={props.onClose}>
                <div className="modal-content" onClick={k => k.stopPropagation()}>
                    <div className="modal-header">
                        
                        <h3>{props.title}</h3>
                    </div>
                    <div className="modal-body">
                        
                        <div>
                            <Logout setUser={setUser} setLoggedIn={setLoggedIn} />
                            

                        </div>

                    </div>
                    <div className="modal-footer">
                        
                        <button onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal;