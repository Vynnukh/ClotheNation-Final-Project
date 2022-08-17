import { useEffect, useState} from "react"
import "../App.css"

const LoginSignUpModal = (props) => {

    const escapeKeyClose = (x) => {
        if((x.charCode || x.keyCode) === 27) {
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
        <div className={`login ${props.show ? "show" : ""}`} onClick = {props.onClose}>
            <div onClick={x => x.stopPropagation()}>
            {/* Modal Content div (purely css, deals with the size of the modal, as well as various other styling of the modal itself, including the animations for when it pops up - might be able to replace this using styled components going forward?)*/}
            <div>
                {/* Modal header, controls more styling elements of the modal - also could be able to replace using styled components? */}
                <h3>{props.title}</h3>
            </div>
            <div>
                {/* Modal body - more styling, that could be used using styled components? */}
                return (
                    <div>
                        {loggedIn ? <div>
                            <logout/>
                        </div>:
                        <div>
                            <p>Sign up or login to access your account</p>
                            <h3>Sign up here:</h3>
                            <br></br>
                            <signUp/>
                            <br></br>
                            <h3>Or</h3>
                            <login/>
                            </div>}
                    </div>
                )
            </div>
            <div>
                {/* Modal footer, more styling of the modal that can be used with the styled components */}
            </div>
            </div>
        </div>
    )
}

export default LoginSignUpModal