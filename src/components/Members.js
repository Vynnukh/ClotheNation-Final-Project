import {getAllUsers} from '../utils';
import {useState,useEffect} from 'react';

const Members = ({loggedIn}) => {
const [displayUsers, setUserDisp] = useState(false);
const [userList, setUserList] = useState([]);

useEffect(()=> {
    getAllUsers(setUserList);
},[])
    return (
        <div className='membersBlock'>
            {loggedIn ?
            <div>
            <h1>Welcome to Members Page</h1>
            <button onClick={(event) => setUserDisp(!displayUsers)}>Toggle Users</button>
                {displayUsers && userList.map((item,index) => {
                return (
                        <div>
                        <h2>{item}</h2>
                        </div>
                        )
                    }
                )}  
            </div> : 
            <div className='membersBlock'>
                <h2>You must be logged in to view the members page.</h2>
            </div>}
        </div>
    )
}

export default Members