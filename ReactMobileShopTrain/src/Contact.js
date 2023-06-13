import React, { Component } from 'react'
import { Form, FormGroup,Label, Input, Button } from 'reactstrap'
import alertify from 'alertifyjs'


export default class Contact extends Component {
    state = {
        email: "",
        password: "",
        select: "",
        selectMulti: "",
        text: "",
        selectedImage:null,
        
    }

    alert = (e) => {
       
        alertify.success("Email: "+this.state.email +"Added" );
        this.props.getUser(this.state)
        e.preventDefault()
        
    }
   
    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
          [name]:value
        })
  }
  
handleImageChange   = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.setState({ selectedImage: e.target.result });
    };

    reader.readAsDataURL(file);
  };




    render() {
      const { selectedImage } = this.state;
       
        // onChange={() => {this.setdeger(document.getElementById("exampleEmail").value)}}
    return (
        <div>
            <div><h3>{ this.state.email}</h3></div>
             <Form > 
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
                    <Input onChange={this.onChangeHandler}  type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange={this.onChangeHandler} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <FormGroup>
          <input type="file" onChange={this.handleImageChange} />
        {selectedImage && (
          <button className="btn btn-danger"onClick={(e) => { e.preventDefault(); this.props.onImageSubmit(this.state.selectedImage); }}>
            Resim Ekle
          </button>
        )}
          </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input onChange={this.onChangeHandler} type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input onChange={this.onChangeHandler} type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input onChange={this.onChangeHandler} type="textarea" name="text" id="exampleText" />
          </FormGroup>
         
      
        <Button  onClick={this.alert}>Submit</Button>
        </Form>
        <div>
       
        </div>
           
      </div>
    )
  }
}
