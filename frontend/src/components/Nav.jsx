import logoImg from '../assets/nav-logo-img.png'
import './Nav.css'


export default function Nav() {

    return (
        <nav >
            <div className="nav-logo-link">
                <img src={logoImg} alt="GeoDance Logo" className='nav-logo-img' />
                <h1 className='nav-logo-title'>GeoDance</h1>
            </div>
            <div className="create-event-link">
                <h2 className="nav-create-event-title">Create Event</h2>
            </div>
        </nav>
    
    )
}