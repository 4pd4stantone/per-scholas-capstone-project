import { Link } from "react-router-dom"
import './Header.css'


export default function Header({headerBtn, setHeaderBtn, input, setInput, setDateFilter}) {

    function handleClickGrid() {
        setHeaderBtn("Grid")
    }
    function handleClickList() {
        setHeaderBtn("List")
    }
    function handleSearchChange(e) {
        setInput(e.target.value);
        console.log(input)
    }
    function handleDateChange(e) {
        const dateInput = e.target.value;

        if(!dateInput) {
            setDateFilter(null);
            return;
        }
        // Date comes in YYYY-MM-DD format, the date is destructred by year, month and day, and the "-" is removed.
        const [year, month, day] = dateInput.split("-");
        // js object created but months start at 0,hence the -1
        const localDate = new Date(year, month -1, day);
        // date converted to MM/DD/YYYY format using toLocaleDateString.
        const correctDate = localDate.toLocaleDateString()
        console.log(correctDate)
        setDateFilter(correctDate);
    }
    

    return (
        <header >
            <div id='header-top-row'>
                <h1 id='header-title'>Find the Best Socials in NYC</h1>
                <Link to='/socials/grid-view' style={{marginLeft: "auto"}}>
                <button 
                id={headerBtn === "Grid" ? "grid-btn-active" 
                : "grid-btn"} className='header-btn' onClick={handleClickGrid}>Grid</button>
                </Link>
                <Link to='/socials/list-view'>
                <button id={headerBtn === "List" ? "list-btn-active" 
                : "list-btn"} className='header-btn' onClick={handleClickList}>List</button>
                </Link>
            </div>
            <div id='header-bottom-row'>
                <input type="date" id='date-input-filter' className='header-inputs'name="date-filter" onChange={handleDateChange}/>
                <input type="text" id='input-search-field' className='header-inputs' name='search' placeholder="Search for socials" onChange={handleSearchChange}/>
            </div>
        </header>
    
    )
}