import { Link } from "react-router-dom"




export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title"><Link to='/CurrentlyPlaying'>Review Round-up</Link></h1>
        <li className="header-item"><Link to='/AllGames'>All Games</Link></li>
        <li className="header-item"><Link to='/Genres'>Genres</Link></li>
      </div>
    </header>
  )
}
