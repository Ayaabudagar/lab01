import React from 'react';
import Header from './components/Header'
import Main from './components/Main'

import Footer from './components/Footer'
import data from './components/data.json'
import SelectedBeast from './components/SelectedBeast'

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      data: data,
     modalShown: false,
      
      selectedBeast: {}
    }
  }

showModal = (event) => {

    const selectedBeast = data.find(horned => horned.title === event);
    console.log(selectedBeast);

    this.setState({selectedBeast, modalShown:true});
  }

  dontShowModal = () => {
    this.setState({modalShown: false});
  }
  render(){
    return(
        <div>
            <Header />
            <Main showModal={this.showModal}/>
            <SelectedBeast modalShown={this.state.modalShown} dontShowModal={this.dontShowModal} selectedBeast={this.state.selectedBeast} />
            <Footer/>
        </div>
    )
}
}

export default App;