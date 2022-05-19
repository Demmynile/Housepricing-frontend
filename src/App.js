import React from 'react'
import { Route ,  Routes , BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import Houseprice from './components/Houseprice';





function App() {
  return (
    <>
        
       
           
           <Router>
           <Routes>
                <Route  path = "/"  element={<Home/>}/>
                <Route   path = "/houseprice"  element={<Houseprice/>}/>
              </Routes>
            </Router>

        
        
    </>
  );
}

export default App;
