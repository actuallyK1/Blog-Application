import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?cs=srgb&dl=pexels-junghua-liu-3063362.jpg&fm=jpg" 
        alt=""  
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                dolor laborum blanditiis eligendi repellat nostrum quasi ipsum! Quae
                facilis eum tempora iste tenetur, itaque, consequuntur sequi laudantium 
                temporibus magnam reiciendis!
            </p>
        </div>
    </div>
  )
}
