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
        <div className="ActivityFeedStyle">
            {loggedIn ? 
            <div>
                
                {imgs.map((item) => {
                    return (
                        <div>
                            <div>
                                <h3>{item.author}</h3>
                                <img src={item.download_url} alt = "API Activity feed"></img>
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            <div>
                <h3>You must be logged in to access the feed</h3>
            </div>}
        </div>
    )
}

export default ActivityFeed