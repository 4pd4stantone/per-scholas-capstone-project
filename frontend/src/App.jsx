import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import CreateEvent from './pages/CreateEvent';
import GridView from './pages/GridView';
import ListView from './pages/ListView';
import EventView from "./pages/EventView";



function App() {

  const [header, setHeader] = useState(true);
  const [headerBtn, setHeaderBtn] = useState("");
  const [input, setInput] = useState("");
  const [dateFilter, setDateFilter] = useState("")

  useEffect(() => {
    setHeaderBtn("Grid");
  }, []);

  return (
    <>
    <Nav header={header} setHeader={setHeader}
    
    />
    {header ? <Header headerBtn={headerBtn} setHeaderBtn={setHeaderBtn} input={input} setInput={setInput} dateFilter={dateFilter} setDateFilter={setDateFilter}/> : ""}
    <Routes>
      <Route path="/socials/grid-view" element={ <GridView headerBtn={headerBtn} setHeaderBtn={setHeaderBtn} input={input} setInput={setInput} dateFilter={dateFilter} setDateFilter={setDateFilter}/>} />
      <Route path="/socials/list-view" element={ <ListView headerBtn={headerBtn} setHeaderBtn={setHeaderBtn} input={input} setInput={setInput} dateFilter={dateFilter} setDateFilter={setDateFilter}/>} />
      <Route path="/create-event" element={ <CreateEvent setHeader={setHeader}/>}/>
      <Route path="/socials/event/:id" element={<EventView setHeader={setHeader}/>} />
    </Routes>
     
     
    
      
    </>
  )
}

export default App
