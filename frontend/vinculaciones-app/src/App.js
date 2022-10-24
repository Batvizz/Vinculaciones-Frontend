import { BrowserRouter as Router ,Switch  ,Route } from "react-router-dom";


import observatorio from './media/pages/observatorio';
import revistadigital from './media/pages/revistadigital'
import NavBar from "./media/components/ComponentsHome/NavBar/NavBar";
import home from './media/pages/home'

import './media/style/personalizado.css' 



function App() {

  return (
   
     <Router>

     

          <NavBar></NavBar>
          
            <Switch>  

                <Route  exact path="/home" component={home}/>

                <Route  exact path="/observatorio" component={observatorio}/>
     
                 <Route  exact path="/revistadigital" component={revistadigital}/>
          
            </Switch>  
            
     

     </Router>
      
          
  );
}

export default App;
