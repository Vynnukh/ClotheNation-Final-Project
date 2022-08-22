export const signUp = async (username, password, email, setUser, setLoggedIn) => {
    try {
        // const response = await fetch("https://clothenation.herokuapp.com/user",{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}user`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        })
        const data = await response.json();
        console.log(data);
        setUser(data.msg.username);
        setLoggedIn(true)
    } 
    catch(error) 
    {
        console.log(error)
    }
}
export const login = async (username, password, setUser, setLoggedIn) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data.user)
        setUser(data.user)
        setLoggedIn(true)
    } 
    catch(error) 
    {
        console.log(error)
    }
}
export const getAllUsers = async (setList) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}user`, {
            // headers: {"Content-Type": "application/json"},
            method: "GET",
        });
        const data = await response.json()
        setList(data.allUsers)
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
export const updateU = async (username, password, newUsername, newEmail, newPassword, setter) => {
    try {
    console.log("updateU function called")
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}user`, {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify({
                "username" : username,
                "password" : password,
                "newUsername" : newUsername,
                "newEmail" : newEmail,
                "newPassword" : newPassword
            })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.log("updateU function ended")
    } 
    catch (error) {
        console.log(error);
    }
}
export const deleteU = async (username, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}user`, {
            headers: {"Content-Type": "application/json"},
            method: "DELETE",
            body: JSON.stringify({
                "username" : username,
                "password" : password
            })
        });
        const data = await response.json();
        console.log(data.user);
        console.log("User Deleted")
    } 
    catch (error) {
        console.log(error);
    }
}