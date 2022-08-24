import {useState, UseEffect, useEffect} from "react"

const ActivityFeed = ({loggedIn}) => {

    const [imgs, setImgs] = useState([])
    const [displayImgs, setDisplayImgs] = useState(false)

    const fetchImg = async () => {
        const response = await fetch("https://picsum.photos/v2/list")
        const data = await response.json()
        setImgs(data)
    }

    useEffect(() => {
        fetchImg()
    }, [])

    return (
        <div className="activityBlock">
            {loggedIn ? 
            <div>
                {imgs.map((item) => {
                    return (
                        <div>
                            <div className="accCard">
                                <img className="accImage" src={item.download_url} alt = "API Activity feed"></img>
                                <h3>Posted by {item.author}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            <div className="activityBlock">
                <h2>You must be logged in to access the activity feed.</h2>
            </div>}
        </div>
    )
}

export default ActivityFeed