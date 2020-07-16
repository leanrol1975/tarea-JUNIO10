import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'

import HotelesData from  './data.js';
import Hero from './components/Hero.js';

function App() {

  
  

  return (
      <div>
    <Hero
        fechadesde="11/11/2019" 
        fechahasta="05/06/2021"
        />

    
    
      </div>
    )
  
}

export default App;
