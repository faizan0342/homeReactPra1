import React from 'react';
import formatCurrency from "../util"
import  Fade from 'react-reveal'
// import Modal from "react-modal"

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            checkOut : false,
            name : "",
            email : "",
            address : "",
        }
    }
    handleForm = (e) => {
        this.setState({
            [e.target.name] : e.target.value ,
            [e.target.email] : e.target.email ,
            [e.target.address] : e.target.address ,
        })
    }
    submitForm = (e) => {
        e.preventDefault()
      var order ={
         name : this.state.name,
         email : this.state.email,
         address : this.state.address,
       }
       this.props.order(order)
    }
    
    render() {
        const { cartitems } = this.props
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.address)

        return (

            <div className='main-card'>
                <div className="card-counter">
                    {cartitems.length === 0 ? (<div>Empty Item</div>) : (<div>You have {cartitems.length} items in the cart</div>)}
                </div>
                <hr/>
                <Fade left>
                <div>
                        {cartitems.map((item) => 
                           <ul key={item._id}>
                            <div className='cart-list'>
                             <li className='li'><img className='cart-img' src={item.image}></img></li>
                             <li className='li'>{item.title}</li>
                             </div>
                             <div className='card-price-button'>
                             <li className='li'>{formatCurrency(item.price)}x{item.count}</li>
                             <li className='li'><button onClick={() => this.props.removeCard(item)} className='cart-btn'>Remove</button></li>
                             </div>
                           </ul>
                        )}
                </div>
                </Fade>
                {cartitems.length > 0 &&  (
                    <Fade right>
                <div className='total_button'>
                    <div>Total : {formatCurrency(cartitems.reduce((a,c) => a + (c.price * c.count) , 0))} </div>
                    <div><button className='cart-btn' onClick={() => {this.setState({checkOut : true})}}>Process</button></div>
                </div>
                </Fade>
                )}
                {this.state.checkOut || cartitems.length > 0 && (
                    <Fade right>
                <div className='card_form'>
                    <form onSubmit={this.submitForm}>
                        <lable>Name :</lable>
                        {" "}<input className='card-input' type='text' name='name' onChange={this.handleForm}></input><br/>
                        <lable >Email :</lable>
                        {" "} {" "}<input className='card-input' type="email" name='email' onChange={this.handleForm}></input><br/>
                        <lable>Address :</lable>
                        {" "}<input className='card-input' type="text" name='address'  onChange={this.handleForm}></input><br/>
                        <input className='cart-btn btn-center'cart-btn type='submit' value="check out"></input>
                    </form>
                </div>
                </Fade>
              )}
            </div>

        )
    }
}

export default Card