import { Link } from "react-router-dom"
import './Header.css'
import { useState } from 'react'


export default function Header({headerBtn, setHeaderBtn, input, setInput}) {

    function handleClickGrid() {
        setHeaderBtn("Grid")
    }
    function handleClickList() {
        setHeaderBtn("List")
    }
    function handleSearchChange (e) {
        setInput(e.target.value);
        console.log(input)
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
                <input type="date" id='date-input-filter' className='header-inputs'/>
                <input type="text" id='input-search-field' className='header-inputs' name='search' placeholder="Search for socials" onChange={handleSearchChange}/>
            </div>
        </header>
    
    )
}