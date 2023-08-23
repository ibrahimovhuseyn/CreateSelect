import "bootstrap/dist/css/bootstrap.min.css"
import Select from './Components/Selection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from "./Components/Search";


function App() {


  return(
    <div>
      <Search/>
      <Select/>
      <ToastContainer />
    </div>
  )
  
}

export default App