import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        {
        name: 'Foot Ball',
        price: '300',
        img: 'https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg'
      },
        {
        name: 'Catapult',
        price: '42',
        img: 'https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg'
      },
        {
        name: 'Shark Ball',
        price: '23',
        img: 'https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg'
      },
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <Dashboard inventory={this.state.inventory}/>
          <Form/>
        </div>
      </div>
  );
}
}
export default App;
