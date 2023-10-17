import React from 'react';
import formatCurrency from "../util"

class Card extends React.Component {
    render() {
        const { cartitems } = this.props

        return (

            <div className='main-card'>
                <div className="card-counter">
                    {cartitems.length === 0 ? (<div>Empty Item</div>) : (<div>You have {cartitems.length} items in the cart</div>)}
                </div>
                <hr/>
                <div>
                        {cartitems.map((item) => 
                           <ul>
                            <div className='cart-list'>
                             <li className='li'><img className='cart-img' src={item.image}></img></li>
                             <li className='li'>{item.title}</li>
                             </div>
                             <div className='card-price-button'>
                             <li className='li'>{formatCurrency(item.price)}x{item.count}</li>
                             <li className='li'><button className='cart-btn'>Remove</button></li>
                             </div>
                           </ul>
                        )}
                </div>
            </div>

        )
    }
}

export default Card