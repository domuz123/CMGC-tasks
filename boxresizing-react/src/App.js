import React, { Component } from "react";
import './index.css';



class App extends Component {
  state = {
       width: 300,
       height: 300}

 handleHeightChange = e => {
  this.setState({
    height: e.target.value,
  
  })}
handleWidthChange = e =>  {
  this.setState({
    width: e.target.value,
 
  })}

 
  handleWidthInput = () => {
    let FieldVal = document.getElementById("w_number_input").value;
    if (FieldVal > 500) {
      this.setState({
        width: 500
      });
    }
  };

  handleHeightInput = () => {
    let FieldVal = document.getElementById("h_number_input").value;
    if (FieldVal > 500) {
      this.setState({
       height: 500
      });
    }
  };
  

render () {
  let style = {
    width: this.state.width + "px",
    height: this.state.height + "px",
    backgroundColor: "green"
  };

  return (

  <div className="container" style={{display:"grid", gridTemplateColumns:"2fr 1fr 1fr"}}>
  <div className="box" style={style}>
  </div>
 

<div className="slidecontainer" style={{display:"grid", width:"50px", height: "50px"}}>
<p>Height</p>
  <input 
  style={{cursor:'pointer'}}
  className='slider'
  type="range" 
  min="1" max="500" 
  name="slider"
  value={this.state.height} 
  onChange={this.handleHeightChange}>
  </input>

   <input
  style={{width:"50px", borderRadius:"5px"}}
  type="number" 
  name="quantity"
  min="1" max="500" 
  step="1"
  id="h_number_input"
  value={this.state.height} 
  onChange={this.handleHeightChange}
  onKeyUp={this.handleHeightInput}>
  </input>
 </div>

 
<div className="slidecontainer" style={{display:"grid", width:"50px", height:"50px"}}>
<p>Width</p>
  <input
  style={{ cursor:'pointer'}}
  type="range" 
  min="1" max="500" 
  name="slider"
  value={this.state.width} 
  onChange={this.handleWidthChange}>
  </input>

  <input
  style={{width:"50px", borderRadius:"5px"}}
  type="number"
  name="quantity"
  min="1" max="500" 
  id="w_number_input"
  value={this.state.width} 
  onChange={this.handleWidthChange}
  onKeyUp={this.handleWidthInput}>
  </input>
 </div>

 </div>
  )}}



export default App