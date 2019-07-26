import React, {Component} from 'react'

export default class Product extends Component {
    render() {
        return(
            <div className="Product">
                <img className="product-image" src={this.props.data.image_url} alt=""/>
                <div className="product-info">
                    <p>
                        {this.props.data.name}
                    </p>
                    <p>
                        ${this.props.data.price}
                    </p>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}