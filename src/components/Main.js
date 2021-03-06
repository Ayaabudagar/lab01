import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json'
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';






class Main extends React.Component {
  handleEvent = (event) => {
    if (event.target.value === "All") {
      this.props.filterHorns(event.target.value);
    } else {
      this.props.filterHorns(+event.target.value);
    }
  }
    render(){
      
            
        return(
          <div>
              <Form>
          <Form.Group controlId="hornsSelected">
            <Form.Label>Number of horns</Form.Label>
            <Form.Control onChange={this.handleFilter} as="select">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardColumns>
              {data.map((item)=>{
                return(
                < HornedBeasts
                
                  imageUrl={item.image_url}
                   title={item.title} 
                   descreption={item.description}
                    horns={item.horns} 
                    showModal={this.props.showModal} 
                    keyword =  {item.keyword}
                />
                  )})}
           </CardColumns>
        

          </div>
        
          //   <div>
    //  </div>
        //     <div className='img'>
        //     <CardColumns>

        //     {this.props.Data.map(item=>{
        //         return(
        //             <HornedBeasts
        //             title={item.title}
        //             imageUrl={item.image_url}
        //             descreption={item.description}
        //             />
        //         )
        //     })
        //     }

        // </CardColumns>
        
        // </div>
        //     <div className='img'>
        //         <HornedBeasts title={'UniWhal'} descreption={'A unicorn and a narwhal nuzzling their horns'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} keyword={'narwhal'}  horns={1} />
        //         <HornedBeasts title={'Rhino Family'} descreption={'Mother (or father) rhino with two babies'}  imageUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}keyword={'narwhal'}  horns={2}/>
        //         <HornedBeasts title={'Unicorn Head'}  descreption={'Someone wearing a creepy unicorn head mask'} imageUrl={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'}keyword={'unicorn'}  horns={1}/>
        //         <HornedBeasts title={'UniLego'}  descreption={'Lego figurine dressed in a unicorn outfit'} imageUrl={'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80'}keyword={'unilego'}  horns={1}/>

        //     </div>
        // )
        )
    }
}

export default Main;

