import "./sideBar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>

            <img className="sidebarImg"
            src="https://fredericmagazine.com/wp-content/uploads/2022/03/FREDERIC_V4_MODERN_PORTRAIT_ARTISTS_JULIA_CONDON_Quintus-Sugarman.jpg" 
            alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum qui, voluptas suscipit aperiam veritatis tempora repellendus veniam aliquam reprehenderit assumenda vitae a dolore laborum ratione molestias sunt officiis at ducimus!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className ="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className ="sidebarIcon fa-brands fa-pinterest"></i>
            <i className ="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className ="sidebarIcon fa-brands fa-facebook"></i>
            </div>
        </div>
    </div>
  )
}
