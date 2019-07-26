import React, {Component} from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state= {
            img: "",
            name: "",
            price: "",
        }
    }
    handleChangeImg(e) {
        this.setState({ img: e.target.value,
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
            img: "",
            name: "",
            price: "",
        })
    }
    render() {
        let { placeholder } = this.state
        return(
            <div className='Form'>
                <div className="form-image">{placeholder ? (
                    <div>
                        <img className="placeholder" src={this.state.img}/>
                    </div>
        )
        : (
            <img className="placeholder" src="http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png"/>
        )
            }
            </div>
                Image URL
                <input type='paste' onChange={e => this.handleChangeImg(e)} value={this.state.img}/>
                Product Name
                <input type='text' onChange={e => this.handleChangeName(e)} value={this.state.name} />
                Price
                <input type='text' onChange={e => this.handleChangePrice(e)} value={this.state.price} />
                <div className="buttons">
                    <button onClick={() => this.cancel()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}