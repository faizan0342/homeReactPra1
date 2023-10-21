import React from 'react';
import currencyFormet from "../util"
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom  from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import {fetchProducts} from "../action/actionProduct"

class Product extends React.Component{
  constructor(){
    super();
    this.state = {
      product:null
    }
  }

  componentDidMount(){
    this.props.fetchProducts()
}

  openModal = (product) => {
    this.setState({product : product})
  }
  closeModal = () => {
    this.setState({product : null})
  }
    render(){
      
       var products = this.props.products
      
       console.log("products ========>" , this.props)
       
        return(
          
                <div>
                  <Fade left>
                  {!this.props.products ? (<div>Loading ....</div>) : (
                  <ul className='product-ul'>
                    {products.map((product) => 
                    <div key={product._id}>
                      <a onClick={() => this.openModal(product)}>
                        <li><img className='product-img' src={product.image}></img></li>
                        <li className='product-title'>{product.title}</li>
                        </a>
                        <div className='product-price-btn'>
                            <li>{currencyFormet(product.price)}</li>
                            <li><button onClick={() => this.props.addToCard(product)} className='product-btn'>Add To Card</button></li>
                        </div>
                    </div>
                    )}
                  </ul>
                   )}
                  </Fade>
                 
                  {this.state.product && (<Modal isOpen = {true}>
                    <Zoom>
                      <div>
                        modal
                        <button onClick={this.closeModal}>X</button>
                        <div>
                          <img src={this.state.product.image}></img>
                          <div>
                          <p>{this.state.product.price}</p>
                        </div>
                        </div>
                      </div>
                    </Zoom>
                  </Modal>)}
                </div>
                
           
        )
    }
}

export default connect((state) => ({products : state.products.items}) ,{fetchProducts}) (Product)