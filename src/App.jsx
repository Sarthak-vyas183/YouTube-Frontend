import './App.css'
import Router from './components/routes/Router'
import Navbar from './components/layout/Nav'
function App() {
  return (
  <div className='w-[100vw] h-[100vh] m-0 p-0'>
    <Navbar/>
    <Router/>
  </div>
  )
}

export default App
