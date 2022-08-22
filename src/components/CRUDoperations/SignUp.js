import {useState} from "react"
import {signUp} from "../../utils"

const SignUp = ({setUser, setLoggedIn}) => {
    console.log("set user in signup.js: ", setUser)
    console.log("set user in signup.js: ", setLoggedIn)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signUpHandler = async (event) => {
        event.preventDefault()
        await signUp(username, email, password, setUser, setLoggedIn)
    }

    return (
        <form>
            <label onSubmit={signUpHandler}>Username:
                <input onChange = {(event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label>Email:
                <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <br></br>
            <label>Password:
                <input onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <button type = "submit">Sign Up</button>
        </form>
    )
}

export default SignUp