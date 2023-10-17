import React from 'react';
import currencyFormet from "../util"

class Product extends React.Component{
    render(){
       var products = this.props.products
       
        return(
                <div>
                  <ul className='product-ul'>
                    {products.map((product) => 
                    <div key={product._id}>
                        <li><img className='product-img' src={product.image}></img></li>
                        <li className='product-title'>{product.title}</li>
                        <div className='product-price-btn'>
                            <li>{currencyFormet(product.price)}</li>
                            <li><button onClick={() => this.props.addToCard(product)} className='product-btn'>Add To Card</button></li>
                        </div>
                    </div>
                    )}
                  </ul>
                </div>
           
        )
    }
}

export default Product