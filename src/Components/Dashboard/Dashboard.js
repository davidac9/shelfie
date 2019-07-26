import React, { Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    
    render() {
        return(
            <div className='Dashboard'>
                {this.props.inventory.map(el => (
                    <Product
                    key={el.id}
                    id ={el.id}
                    data = {el}
                    />
                ) )}
            </div>
        )
    }
}