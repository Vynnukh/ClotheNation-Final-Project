import DeleteUser from "./CRUDoperations/Delete.js";
import UpdateUser from "./CRUDoperations/Update.js";
// import UpdateUser from "./Modals/Update.js";

const Account = ({loggedIn}) => {

  return (
    <div className="accBlock">
        {loggedIn ? 
        <div>
          <UpdateUser/>
          <DeleteUser/>
        </div>
        : 
        <div>
          <p>You must be logged in to access the accounts page.</p>
        </div>}
    </div>
  )  
}

export default Account