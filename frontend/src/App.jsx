import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import CreateEvent from './pages/CreateEvent';
import GridView from './pages/GridView';
import ListView from './pages/ListView';



function App() {

  const [header, setHeader] = useState(false)

  return (
    <>
    <Nav header={header} setHeader={setHeader}/>
    {header ? <Header /> : ""}
    <Routes>
      <Route path="/socials/grid-view" element={ <GridView />} />
      <Route path="/socials/list-view" element={ <ListView />} />
      <Route path="/create-event" element={ <CreateEvent />} />
    </Routes>
     
     
    
      
    </>
  )
}

export default App
