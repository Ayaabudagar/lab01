import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'




class HornedBeasts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numOfPets : 0
        }
    }
    
    incrementNumOfPets = () => {
        this.setState({
            numOfPets : this.state.numOfPets+1
        })
    }
    render(){
        return(
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.imageUrl}alt={this.props.descreption}title={this.props.title}/>
            //     <p className='desc'> description: {this.props.descreption}</p>
            // </div>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imageUrl} onClick={this.incrementNumOfPets}/>
            <Card.Body>
                <Card.Title> {this.props.title}</Card.Title>
                <Button onClick={this.increaseNumberofclicks} variant="primary">😻Vote{this.state.numberOfpets}</Button>
                <Card.Text>
                ❤️ : {this.state.numOfPets}
                </Card.Text>
                <Card.Text>
                descreption :  {this.props.descreption}
                 </Card.Text>
                
                 <Card.Text>
                kayword :  {this.props.keyword}
                 </Card.Text>

                 <Card.Text>
                 horns :  {this.props.horns}
                 </Card.Text>
                
            </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;