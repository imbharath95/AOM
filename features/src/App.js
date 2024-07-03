// packages import 
import {BrowserRouter, Routes, Route} from "react-router-dom";
// component imports
import Login from "./login/Login";
import Signup  from "./register/Signup";
import  NavBar  from "./navbar/Navbar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/Signup" element= {<Signup/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
