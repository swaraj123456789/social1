import { Route,Routes,link} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./Profile";

function App() {
  return (
     <Routes>
  
        
        <Route path="/" element={<Login/>} exact />
        <Route path="/Profile" element={<Profile/>} exact />
        
     
     </Routes>
  )
}

export default App;
