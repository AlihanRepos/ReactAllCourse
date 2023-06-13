import React, { Component } from "react";
import {ListGroup,ListGroupItem}from 'reactstrap'

export default class Categories extends Component{
    state={
        categories:[],
    };
    // getCategories=()=>{
    //     fetch("http://localhost:3000/categories")                   
    //     .then((response)=>response.json())
    //     .then((data)=>this.setState({categories:data}))
    // }

    getCategories(){
        fetch("http://localhost:3000/categories")                   
        .then((response)=>response.json())
        .then((data)=>this.setState({categories:data}))
    }
    componentDidMount(){
        this.getCategories();
    }
    render(){
        return (
            <div style={{margin:"10px",marginLeft:"20px"}}> 
            
            <ListGroup >
                <ListGroupItem  style={{backgroundColor:"white"}}><h2>Categories</h2></ListGroupItem>
                
                {this.state.categories.map((category)=>(
                    <ListGroupItem style={{backgroundColor:"white"}} key={category.id} onClick={()=>this.props.changeCurrentCategory(category)}>{category.categoryName}</ListGroupItem>
                ))}
                
                
                </ListGroup>
                </div>
        )
    }
    
}