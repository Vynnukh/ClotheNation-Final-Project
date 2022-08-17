export const signUp = async (username, password, email, setUser, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5001/user",
        {method: "POST",
        headers: {"Content-Type": "application/json"},
    body: JSON.stringify
    ({"Username": username,
    "Password": password,
        "Email": email
    })
}
)
const data = await response.json()
setUser()
setLoggedIn(true)

    } catch(error) {
        console.log(error)
    }
}

export const login = async (username, password, setUser, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "Username": username,
                "Password": password
            })
        })
        const data = await response.json()
        setUser()
        setLoggedIn(true)
    } catch(error) {
        console.log(error)
    }
}