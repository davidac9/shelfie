import React, {Component} from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super()
        this.state= {
            name: "",
            price: 0,
            image_url: "",
        }
    }
    handleChangeImg(e) {
        this.setState({ image_url: e.target.value,
        placeHolder: false })
    }
    handleChangeName(e) {
        this.setState({ name: e.target.value })
    }
    handleChangePrice(e) {
        this.setState({ price: e.target.value})
    }
    cancel() {
        this.setState({
            name: "",
            price: "",
            image_url: "",
        })
    }

    createProduct() {
        const body = {
            name: this.state.name,
            price: this.state.price,
            image_url: this.state.image_url
        }
        axios.post('/api/product', body).then(res => {
            console.log(res)
        }).catch(err => console.log(err, "couldn't create product oops"))
        this.cancel()
        this.props.getInventory()
    }

    render() {
        return(
            <div className='Form'>
                <div className="form-image">
                    <img className="placeholder" src={this.state.image_url} alt="" />

                </div>
                Image URL
                <input type='paste' onChange={e => this.handleChangeImg(e)} value={this.state.image_url}/>
                Product Name
                <input type='text' onChange={e => this.handleChangeName(e)} value={this.state.name} />
                Price
                <input type='text' onChange={e => this.handleChangePrice(e)} value={this.state.price} />
                <div className="buttons">
                    <button onClick={() => this.cancel()}>Cancel</button>
                    <button onClick={() => this.createProduct()}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}