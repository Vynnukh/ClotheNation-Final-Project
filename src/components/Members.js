

const Members = ({loggedIn}) => {
   
    
    return (
        <div>
        {loggedIn ?
        <div>
            <h1>Temp Message for members Page</h1>
        </div>
    : <div>
        <h2>You must be logged in to view members</h2>
    </div>}
    </div>
    )
}

export default Members