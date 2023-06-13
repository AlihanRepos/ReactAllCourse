import CartDetail from './CartDetail'
import NotFound from './NotFound'
import Contact from './Contact'
import User from './User'

import Categories from './Categories'
import Products from './Products'
import Navbars from './Navbars'
import {Row,Col} from 'reactstrap'
import React, { Component } from 'react'
import alertify from 'alertifyjs'
import { Route, Routes } from 'react-router-dom'

export default class App extends Component{
  state={
    currentCategory:"",
    products: [],
    cart: [],
    user: [],
    imageData:null
  }

  getUser = (u) => {
    
      this.setState({
        user:u
      });
    
  }
  componentDidMount(){
    this.getUser()
   }
  
  getProducts=(categoryId)=>{
    let url="http://localhost:3000/products";
    if(categoryId)
    url+="?categoryId="+categoryId;
    fetch(url)
  .then((response)=>response.json())
  .then((data)=>this.setState({products:data}))
  }
  
 componentDidMount(){
  this.getProducts()
 }
 
  changeCurrentCategory=(category)=>{
    this.setState({
        currentCategory:category.categoryName
    });
    this.getProducts(category.id)
  };
  
  addtoCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if(addedItem){
      addedItem.quantity += 1
      alertify.success(product.productName+" Added")
    }
    else {
      newCart.push({product:product,quantity:1})
    }
    this.setState({ cart: newCart });
  
    
  }


  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart })
    alertify.error(product.productName+" Removed")   
  }
  handleImageSubmit = (imageData) => {
    
    this.setState({ imageData:imageData });
  };



 
  render(){
    return (
      <div className="App">
        <Navbars removeToCart={this.removeToCart} data={this.state.cart} />
        <Row>
          <Col xs="3">
          <Categories changeCurrentCategory={this.changeCurrentCategory}
          currentCategory={this.state.currentCategory}
          ></Categories>
          </Col>
          <Col xs="6">
            <Routes>
              <Route path='/' element={<Products addtoCart={this.addtoCart} currentCategory={this.state.currentCategory} catId={this.state.catId} products={this.state.products}
              />} />
              <Route path='/cart' element={
                <CartDetail cart={this.state.cart} removeToCart={this.removeToCart}
                />
              } />
              <Route path='/contact' element={<Contact getUser={this.getUser} onImageSubmit={this.handleImageSubmit}  />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/user' element={<User userdata={this.state.user}  imageData={this.state.imageData} />} />
            </Routes>
          </Col>
        </Row>

  
      </div>
    );
  }
  
}