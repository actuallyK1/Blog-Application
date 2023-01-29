import { Link } from "react-router-dom";
import "./topBar.css"

export default function  TopBar() {
  const user = false;
  return (
    <div className="top"> 
        <div className="topLeft">
        <i className ="topIcon fa-brands fa-square-twitter"></i>
        <i className ="topIcon fa-brands fa-facebook"></i>
        <i className ="topIcon fa-brands fa-pinterest"></i>
        <i className ="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link to={"/"} className="link">HOME</Link>
                  </li>
                <li className="topListItem"><Link to={"/"} className="link">ABOUT</Link></li>
                <li className="topListItem"><Link to={"/"} className="link">CONTACT</Link></li>
                <li className="topListItem"><Link to={"/write"} className="link">WRITE</Link></li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          { user ? (
            <img className="topImg"
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg" 
            alt="" 
            />
          ):(
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to={"/login"}>LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to={"/register"}>REGISTER</Link>
              </li>
            </ul>
          )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    
  )
}
