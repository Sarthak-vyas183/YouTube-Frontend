import './App.css'
import Router from './components/routes/Router'
import Navbar from './components/layout/Nav'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
  <div className='w-[100vw] h-[100vh] m-0 p-0 overflow-x-hidden'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <Navbar/>
    <Router/>
  </div>
  )
}

export default App
