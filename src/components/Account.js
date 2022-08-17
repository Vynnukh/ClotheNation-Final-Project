


const Account = () => {




  return (
    <div className="accBlock">
        <div className="accText">
          <h1>Account Page</h1>
          <h2>This is your account infomation. Update your details here.</h2>
        </div>
        <div className="accInfo">
          <div className="email">
            <p className="bold">Email</p>
            <p>Insert Email Here</p>
          </div>
          <div className="username">
            <p className="bold">Username</p>
            <p>Insert Username Here</p>
            <button className="accBtn">Update Username</button>
          </div>
          <div className="password">
            <p className="bold">Password</p>
            <p>Insert Password Here</p>
            <button className="accBtn">Update Password</button>
          </div>
        </div>
    </div>
  )  
}

export default Account