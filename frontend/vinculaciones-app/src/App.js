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
                             <Route exact path="/"  element={<Home></Home>} /> 

                              <Route exact path="/revistadigital" element={<RevistaDigital></RevistaDigital>} />

                              <Route exact path="/observatorio" element={<Observatorio></Observatorio>} />
                              
                      </Routes>     

                      <Footer></Footer>
                </Router>   
  );
}

export default App;
