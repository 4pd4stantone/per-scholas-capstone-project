import { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import CreateEvent from './pages/CreateEvent';

function App() {

  return (
    <>
     <Nav />
     <CreateEvent />
    </>
  )
}

export default App
