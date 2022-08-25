import { useState } from "react";
import {login} from "../../utils"

export const Login = ({setUser, setLoggedIn}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const loginHandler = async (event) => {

        event.preventDefault()
        await login(username, password, setUser, setLoggedIn)
        setUsername("")
        setPassword("")
    }

    return (
        <form onSubmit={loginHandler}>
            <h1>Login</h1>
            <br></br>
            <label>Username:
            <input value={username} onChange={(event) => setUsername(event.target.value)} required/>
                {/* <input onChange={(event) => setUsername(event.target.value)}/> */}
            </label>
            <br></br>
            <label>Password:
            <input value={password} type="password" onChange={(event) => setPassword(event.target.value)} required/>
                {/* <input onChange={(event) => setPassword(event.target.value)}/> */}
            </label>
            <br></br>
            <button className="addButton" type="submit">Login</button>
        </form>
    )
}