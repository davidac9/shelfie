import React, { Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
    // This is where I left off
    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(res => {
            console.log('heya')
        }).catch(err => console.log(err, "delete failed! oops"))
        this.props.getInventory()
    }
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