import { useState } from "react"
import {deleteU} from "../../utils"

const DeleteUser = ({setUser}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const deleteHandler = async (event) => {
    event.preventDefault();
    await deleteU(username, password, setUser)
  }

return (
  <div>
    <form onSubmit ={deleteHandler}>
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)} required/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)} required/>
      </label>
      <br></br>
      <button className="addButton" type="submit">Click here to Delete User</button>
    </form>
  </div>
)

}

export default DeleteUser;