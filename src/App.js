import React from 'react';
import Header from './components/Header'
import Main from './components/Main'

import Footer from './components/Footer'
import data from './components/data.json'
import SelectedBeast from './components/SelectedBeast'
import Form from 'react-bootstrap/';



class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      data: data,
     modalShown: false,
     numberOfHorns : 'all',
     beastData: data,
      
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
  filterHorns = (horns) => {
    if(horns === "All") {
      this.setState({beastData: data})
    } else {
      const array = this.state.data.filter( element => element.horns === horns)

      this.setState({beastData: array})
    }
  }
  

  render(){
    return(
        <div>
            <Header />
            
            

            <Main showModal={this.showModal}  beasts={this.state.beastData}
          filterHorns={this.filterHorns} />
            <SelectedBeast modalShown={this.state.modalShown} dontShowModal={this.dontShowModal} selectedBeast={this.state.selectedBeast} />
            <Footer/>
        </div>
    )
}
}

export default App;