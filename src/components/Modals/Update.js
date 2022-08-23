import { useState } from "react"
// import { updateU } from "../utils"
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
  }

return (
      <div>
        <form onSubmit={updateHandler}>
        <h1>Sign up</h1>
        <br></br>
        <label>Username:
            <input onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <br></br>
        <label>Password:
            <input onChange={(event) => setPassword(event.target.value)}/>
        </label>
        <br></br>
        Update Information  
        <label>New Username:
        <input onChange = {(event) => setNewUsername(event.target.value)}/>
        </label>
        <br></br>
        <label>New Email:
        <input type="email" onChange = {(event) => setNewEmail(event.target.value)}/>
        </label>
        <br></br>
        <label>New Password:
        <input onChange = {(event) => setNewPassword(event.target.value)}/>
        </label>
        <br></br>
        <button type="submit">Update Information</button>
      </form>
    </div>
   )
}
//     <div>
//         <br></br>
//         For security purposes please reënter your name and password
//             <form onSubmit ={updateHandler}>
//                 <label>Username:
//                 <input onChange = {(event) => setUsername(event.target.value)}/>
//                 </label>
//                 <br></br>
//                 <label>Password:
//                 <input onChange = {(event) => setPassword(event.target.value)}/>
//                 </label>
//             <br></br>
//             <h3>Update any or all of the following fields</h3>
//             <br></br>
//                 <label>New Username:
//                 <input onChange = {(event) => setNewUsername(event.target.value)}/>
//                 </label>
//                 <br></br>
//                 <label>New Email:
//                 <input type="email" onChange = {(event) => setNewEmail(event.target.value)}/>
//                 </label>
//                 <br></br>
//                 <label>New Password:
//                 <input onChange = {(event) => setNewPassword(event.target.value)}/>
//                 </label>
//                 <br></br>
//                 <button type="submit">Update Information</button>
//             </form>
//   </div>
// )



export default UpdateUser;