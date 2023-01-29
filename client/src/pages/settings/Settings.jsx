import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete account</span>
            </div>
            <form className="settingsForm">
                <label>Profile picture</label>
                <div className="settingsPP">
                    <img src="https://www.agora-gallery.com/advice/wp-content/uploads/Artist-in-quarantine.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="kesha"/>
                <label>E-mail</label>
                <input type="email" placeholder="kesha@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">UPDATE</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
