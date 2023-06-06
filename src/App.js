import Rotas from "./routes/Rotas";
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';

import Efeitos from "./components/Efeitos";

function App() {
  return (
    
    
    <div className="App">
      <Efeitos>
    <BrowserRouter>
        <Rotas />
    </BrowserRouter>
    </Efeitos>
    </div>
    
  );
}

export default App;
