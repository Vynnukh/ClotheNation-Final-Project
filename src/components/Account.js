import DeleteUser from "./CRUDoperations/Delete.js";
import UpdateUser from "./CRUDoperations/Update.js";
// import UpdateUser from "./Modals/Update.js";

const Account = ({loggedIn}) => {

  return (
    <div>
      {loggedIn ? 
      <div>
    <UpdateUser/>
    <DeleteUser/>
    </div>
    : 
    <div>
    <h1>BUGGER OFF</h1>
        <h3>You must be logged in to access your account</h3></div>}
    </div>
  )  
}

export default Account