import './App.js';
import {LineGraph} from './components/graphs/Linetac.jsx'
import { LineGraph1 } from './components/graphs/Linepac.jsx';
import { LineGraph2 } from './components/graphs/Lineaac.jsx';
import Navegation from './components/navegation';
import './components/chartStyles.css'


function App() {
  return (
    <div className="App">
     
      <div class name="colum">
      <Navegation/>
      </div>
     
      <div class name="colum">
      <LineGraph/>
      </div>
      
      <div class name="colum">
      <LineGraph1/>
      </div>
      
      <div class name="colum">
      <LineGraph2/>
      </div>
    
    </div>

      

  );
}

export default App;
