import { useState } from "react"
import { deleteU } from "../utils"

const DeleteUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const deleteHandler = async (event) => {
    event.preventDefault();
    await deleteU(username, password, setter)
  }

return (
  <div>
    <form onSubmit ={deleteHandler}>
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">Click here to Delete User</button>
    </form>
  </div>
)

}

export default DeleteUser;