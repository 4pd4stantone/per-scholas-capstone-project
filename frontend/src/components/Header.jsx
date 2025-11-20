
import './Header.css'


export default function Header() {

    return (
        <header >
            <div id='header-top-row'>
                <h1 id='header-title'>Find the Best Socials in NYC</h1>
                <button id="grid-btn" className='header-btn'>Grid</button>
                <button id='list-btn' className='header-btn'>List</button>
            </div>
            <div id='header-bottom-row'>
                <input type="date" id='date-input-filter' className='header-inputs'/>
                <input type="text" id='input-search-field' className='header-inputs'/>
            </div>
        </header>
    
    )
}