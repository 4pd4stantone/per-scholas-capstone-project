import { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import CreateEvent from './pages/CreateEvent';
import GridView from './pages/GridView';

function App() {

  return (
    <>
     <Nav />
     <Header />
     {/* <CreateEvent /> */}
    <GridView/> 
    </>
  )
}

export default App
