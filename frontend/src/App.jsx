import { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import CreateEvent from './pages/CreateEvent';

function App() {

  const [danceStudioSocials, setDanceStudioSocials] = useState([]);

  useEffect(() => {
    async function getDanceStudioSocials() {
        const response = await fetch('http://localhost:8080/danceStudioSocials');
        const data = await response.json();
        console.log(data);
        setDanceStudioSocials(data)
    }
    getDanceStudioSocials()
  }, [])

  return (
    <>
     <Nav />
     <CreateEvent />
    </>
  )
}

export default App
