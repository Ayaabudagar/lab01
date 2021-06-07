import React from 'react';
import Header from './components/Header'
import Main from './components/Main'

import Footer from './components/Footer'
import Data from './components/data.json'

class App extends React.Component { 
  render(){
    return(
      <div>
           <Header />
           <Main Data={Data}/>
           <Footer />

           

      </div>
     
        
      
    )
  }
}

export default App;