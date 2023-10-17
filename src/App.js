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
      cartitems : []
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
    // console.log(items)
    // var cartitems = this.state.cartitems
    // cartitems.push(items)
    // this.setState({cartitems: cartitems})
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
              <Card cartitems={this.state.cartitems}/>
            </div>
          </main>
          <footer>footer</footer>
        </div>
      )
    }
  }

export default App;
