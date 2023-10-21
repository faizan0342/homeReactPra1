import React from 'react';
import {sizeProduct} from "../action/filterProducts"
import {connect} from 'react-redux'

class Filter extends React.Component{
    render(){
  
      var product = this.props.products
      console.log("productpp====>" , product)
        return(
            <div>
                 <div className='sidebar'>
                <div className='sidebar-product'> {product.length}{" "}product </div>
                <div className='sidebar-sort'>
                  lower {" "}
                <select value={this.props.sorts} onChange={(e) => (this.props.sort(e))}>
                  <option>Latest</option>
                  <option value="lowest">lowest</option>
                  <option value="highest">highest</option>
                </select>
                </div>
                <div className='sidebar-product-size'>
                Size {" "}
                <select value={this.props.size} onChange={(e) => {this.props.sizeProduct(this.props.products ,e.target.value)}}>
                  <option value="ALL">All</option>
                  <option value="XS">XS</option>
                  <option value="X">X</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
                </div>
              </div>

            </div>
        )
    }
}

export default connect((state) => ({products : state.size.items , size : state.size.size}) ,{sizeProduct}) (Filter)
