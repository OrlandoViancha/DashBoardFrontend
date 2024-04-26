import "./menu.css"
export function Menu() {
 return (
  <div className="menu">
   <div className="item">
    <span className="title">MAIN</span>
    <div className="listItem">
      <img src='/home.svg' alt=""></img>
      <span className='listItemTitle'>Home</span>
    </div>
    <div className="listItem">
      <img src='/profile.svg' alt=""></img>
      <span className='listItemTitle'>Profile</span>
    </div>  
   </div>
  </div>
 )
}