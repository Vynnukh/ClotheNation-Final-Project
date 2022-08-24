

const ActivityFeed = ({loggedIn}) => {

    return (
        <div>
            {loggedIn ? 
            <div>
                <h3>Logged in feed</h3>
            </div>
            :
            <div>
                <h3>You must be logged in to access the feed</h3>
            </div>}
        </div>
    )
}

export default ActivityFeed