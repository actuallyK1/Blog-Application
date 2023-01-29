import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLg">Blog</span> 
            <img 
             className="headerImg"
             src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
             alt="" 
            />
        </div>
    </div>
  )
}
