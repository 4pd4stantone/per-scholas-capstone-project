import { Link } from "react-router-dom"
import logoImg from '../assets/nav-logo-img.png'
import './Nav.css'


export default function Nav({setHeader, setHeaderBtn}) {

    function handleClick () {
        setHeader(true)
        setHeaderBtn("Grid")
    }
    function handleClickCreateEvent () {
        setHeader(false)
    }

    return (
        <nav >
            <Link to="/socials/grid-view" style={{textDecoration: "none"}} onClick={handleClick}>
            <div className="nav-logo-link">
                <img src={logoImg} alt="GeoDance Logo" className='nav-logo-img' />
                <h1 className='nav-logo-title'>GeoDance</h1>
            </div>
            </Link>
            <div className="create-event-link">
                <Link to="/create-event" onClick={handleClickCreateEvent} style={{textDecoration: "none"}}>
                <h2 className="nav-create-event-title">Create Event</h2>
                </Link>
            </div>
            <div className="join-link">
                <h2 className="nav-create-event-title" id="join-title">Join GeoDance</h2>
            </div>
        </nav>
    
    )
}