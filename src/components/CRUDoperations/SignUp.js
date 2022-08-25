import {useState} from "react"
import {signUp} from "../../utils"

const SignUp = ({setUser, setLoggedIn}) => {
    console.log("set user in signup.js: ", setUser)
    console.log("set user in signup.js: ", setLoggedIn)
    let [username, setUsername] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    const signUpHandler = async (event) => {
        event.preventDefault()
        await signUp(username, email, password, setUser, setLoggedIn)
        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (

            <form onSubmit={signUpHandler}>
            <h1>Sign up</h1>
            <br></br>
            <label className="UsernameInput">Username:
            <input required value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label>Email:
            <input required value={email} type="email" onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <br></br>
            <label>Password:
            <input required value={password} type="password" onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <button className="addButton" type="submit">Signup</button>
        </form>
            )
}

export default SignUp