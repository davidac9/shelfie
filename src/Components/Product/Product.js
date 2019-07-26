import React, {Component} from 'react'

export default class Product extends Component {
    render() {
        return(
            <div className="Product">
                <img src={this.props.data.img}/>
                <div className="product-info">
                    <p>
                        {this.props.data.name}
                    </p>
                    <p>
                        ${this.props.data.price}
                    </p>
                </div>
            </div>
        )
    }
}