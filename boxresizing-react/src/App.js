import React, { Component } from "react";
import './index.css';



class App extends Component {

  state = {
       width: 300,
       height: 300,
 }

 handleHeightChange = e => {
  this.setState({
    height: e.target.value,
  
  });
}

handleWidthChange = e => {
  this.setState({
    width: e.target.value,
 
  })
}


render () {
  let style = {
    width: this.state.width + "px",
    height: this.state.height + "px",
    backgroundColor: "green"
  };
  return (



  <div style={{display:"grid", gridTemplateColumns:"2fr 1fr 1fr"}}>

  <div className="container" style={style}>

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
  onChange={this.handleHeightChange}
 
></input>

   <input
  style={{width:"50px", borderRadius:"5px"}}
  id="inputValue"
  type="text"
  min="1" max="300" 
  value={this.state.height} 
  onChange={this.handleHeightChange}
 

 
  ></input>

 </div>

 
<div className="slidecontainer" style={{display:"grid", width:"50px", height:"50px"}}>
<p>Width</p>
  <input
  style={{ cursor:'pointer'}}
  type="range" 
  min="1" max="500" 
  name="slider"
  value={this.state.width} 
  onChange={this.handleWidthChange}

  ></input>

  <input
  style={{width:"50px", borderRadius:"5px"}}
  type="text"
  min="1" max="300" 
  value={this.state.width} 
  onChange={this.handleWidthChange}
 
  ></input>
 </div>

 </div>
  )
}

}



export default App