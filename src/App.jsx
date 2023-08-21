import "bootstrap/dist/css/bootstrap.min.css"
import Select from './Components/Selection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return(
    <div>
      <Select/>
      <ToastContainer />
    </div>
  )
  
}

export default App