import DeleteUser from "./CRUDoperations/Delete.js";
import UpdateUser from "./CRUDoperations/Update.js";

const Account = ({loggedIn}) => {

  return (
    <div className="accBlock">
        {loggedIn ? 
        <div>
          <UpdateUser/>
          <DeleteUser/>
        </div>
        : 
        <div className="accBlock">
          <h2>You must be logged in to access the accounts page.</h2>
        </div>}
    </div>
  )  
}

export default Account