import { useState } from "react"
import {updateU} from "../../utils"

const UpdateUser = ({setUser}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();

  const updateHandler = async (event) => {
    event.preventDefault();
    await updateU(username, password, newUsername, newEmail, newPassword, setUser)
    setUsername("")
    setPassword("")
    setNewUsername("")
    setNewEmail("")
    setNewPassword("")
  }

return (
      <div>
        <form onSubmit={updateHandler}>
        <div className="accBlock">
          <br></br>
          <label>Username:
          <input value={username} onChange={(event) => setUsername(event.target.value)} required/>
          </label>
          <br></br>
          <label>Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
          </label>
          <br></br>
          Update Information  
          <label>New Username:
          <input value={newUsername} onChange={(event) => setNewUsername(event.target.value)}/>
          </label>
          <br></br>
          <label>New Email:
          <input value={newEmail} type="email" onChange={(event) => setNewEmail(event.target.value)}/>
          </label>
          <br></br>
          <label>New Password:
          <input value={newPassword} type="password" onChange={(event) => setNewPassword(event.target.value)}/>
          </label>
          <br></br>
          <button className="addButton" type="submit">Update Information</button>
        </div>
      </form>
    </div>
   )
}

export default UpdateUser;