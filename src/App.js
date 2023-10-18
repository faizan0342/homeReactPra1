import logo from './logo.svg';
import './App.css';

import React from 'react';
import Filter from './component/Filter';
import Card from './component/Card';
import Product from './component/Product';
import data from "./data.json";



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data.products,
      sort: "",
      size: "",
      cartitems : localStorage.getItem("cartitem") ? JSON.parse(localStorage.getItem("cartitem")) : [],
      
    }
  }
  sort = (e) => {
    var sort = e.target.value;
    console.log(e.target.value);

    // Assuming `data` is an array of objects
    this.setState((state) => ({
      sort: sort,
      data: state.data.sort((a, b) =>
        sort === "lowest" ?
          (a.price > b.price ? 1 : -1) :
          sort === "highest" ?
            (a.price < b.price ? 1 : -1) :
            a._id > b._id
      )
    }));
  }

  filters = (e) => {
    console.log(e.target.value)
    // var size = e.target.value 
    if (e.target.value === "" ) {
      this.setState({ size: e.target.value, product: data.products })
    }
    if (e.target.value === "ALL" ) {
      // Reload the page
      window.location.reload();
    }
    else {
      this.setState({
        size: e.target.value,
        data: data.products.filter((product) => product.availableSizes.indexOf(e.target.value) >= 0)

      })
    }
  }

  addToCard = (items) => {
    
    var cartitems = this.state.cartitems.slice()
    var alreadyExits = false
    cartitems.forEach((product) => {
      if(product._id === items._id){
        product.count ++
        alreadyExits = true
      }
    })
    if(!alreadyExits){
    cartitems.push({...items , count : 1})
    
  }
  console.log("=====>",this.state.cartitems)
  this.setState({cartitems: cartitems})

  localStorage.setItem("cartitem", JSON.stringify(cartitems));
    // console.log(items)
    // var cartitems = this.state.cartitems
    // cartitems.push(items)
    // this.setState({cartitems: cartitems})
  }

  removeCard = (item) => {

    var cartitem = this.state.cartitems.slice()
    
   cartitem.filter((x) => x._id !== item._id)
   this.setState({cartitems : cartitem.filter((x) => x._id !== item._id)})

    localStorage.setItem("cartitem" , JSON.stringify(cartitem.filter((x) => x._id !== item._id)))
    
    console.log("===." , cartitem)

    // localStorage.setItem("cartitem" , JSON.stringify(JSON.stringify(cartitem.filter((x) => x._id !== item._id)))
  }

  order = (order) => {
    console.log(" ===>" ,order)
    alert(`ypur name is  ${order.name}  and your is created`)
  }
    render() {
    
      return (
        <div className='grid-container'>
          <header>
            <div className='header-color'>React Shopping Card</div>
            <div className='header-color'>Admin</div>
          </header>
          <main>
            <div className='main'>
              <div className='main-product'>
                <Filter products={this.state.data} sort={this.sort} filters={this.filters} sorts={this.state.sort} size={this.state.size} />
                <hr></hr>
                <Product products={this.state.data} addToCard = {this.addToCard}/>
              </div>
              <Card cartitems={this.state.cartitems} removeCard = {this.removeCard} order = {this.order}/>
            </div>
          </main>
          <footer>footer</footer>
        </div>
      )
    }
  }

export default App;
