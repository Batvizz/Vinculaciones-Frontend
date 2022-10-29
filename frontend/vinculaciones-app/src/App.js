 ///////////React Router Dom////////////////////
 import { BrowserRouter as Router ,Route,Routes  } from "react-router-dom"; 

/////////////////Pages/////////////////////////
import Observatorio from './media/pages/Observatorio'
import RevistaDigital from './media/pages/RevistaDigital' 
import Home from './media/pages/Home' 

import NavBar from "./media/components/ComponentsHome/NavBar/NavBar"
 import Footer from "./media/components/ComponentsHome/Footer/Footer"

/////////////////Bootstrap/////////////////
 import 'bootstrap/dist/css/bootstrap.min.css'; 





function App() {

  return (
                <Router> 
                          <NavBar></NavBar>
                          
                        <Routes> 
                             <Route exact path="/"  element={<h1>Hola  Home </h1>} /> 

                              <Route exact path="/revistadigital" element={<h1>Hola revista</h1>} />

                              <Route exact path="/observatorio" element={<h1>Hola observatorio</h1>} />
                              
                      </Routes>     
                      <Footer></Footer>
                </Router>   
  );
}

export default App;
