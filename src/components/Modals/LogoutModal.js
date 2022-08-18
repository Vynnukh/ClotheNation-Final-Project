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
        <div className={`modal ${props.show ? "show" : ""}`} onClick={props.onClose}>
            <div className="modal-content" onClick={k => k.stopPropagation()}>
                <div>
                    {/* header Class */}
                    <h3>{props.title}</h3>
                </div>
                <div>
                    {/* Modal-Body Class */}
                    <div>
                        <Logout setUser={setUser} setLoggedIn={setLoggedIn} />
                    </div>

                </div>
                <div>
                    {/* Footer Class */}
                </div>
            </div>
        </div>
    )
}

export default LogoutModal