import React, { useState } from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom';

class DistanceCalculator extends React.Component {

    data = [
    {
        value: [1,5],
        label: "Mumbai"
    },
    {
        value: [7,2],
        label: "Kolkata"
    },
    {
        value: [6,5],
        label: "Chennai"
    },
    {
        value: [4,9],
        label: "Banglore"

    }    
];
selectedSource = ""
selectedDest = ""
distance = 0  
  handleSource = selectedSource => {
    this.selectedSource = selectedSource
    console.log(this.selectedSource.label)
  };

  handleDest = selectedDest => {
    this.selectedDest = selectedDest
    console.log(this.selectedDest.label)
  };

  calculateCost= () => {
    if(this.selectedSource==""){
        alert('Source Not Avaialable. Please enter Source')
    }
    else if(this.selectedDest==""){
        alert('Destination Not Avaialable. Please enter destination')
    }
    else if(this.selectedSource.label==this.selectedDest.label){
        alert('Source and Destination cannot be the same')
    }
    else{
        let x = this.selectedDest.value[0] - this.selectedSource.value[0]
        let y = this.selectedDest.value[1] - this.selectedSource.value[1]
        this.cost =  (x*x + y*y) * 100
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<h3>Total Cost :<font color='green'>{this.cost}</font></h3>)
    }
  }

  /*Cost with MiddleStop*/
  calculateCostwithMidStop= (middlestop) => {
    if(this.selectedSource==""){
        alert('Source Not Avaialable. Please enter Source')
    }
    else if(this.selectedDest==""){
        alert('Destination Not Avaialable. Please enter destination')
    }
    else{
        let x = this.selectedDest.value[0] - this.middlestop.value[0]
        let y = this.selectedDest.value[1] - this.middlestop.value[1]
        let dist1 = x*x + y*y
        let x1 = this.middlestop.value[0] - this.selectedSource.value[0]
        let y1 = this.middlestop.value[1] - this.selectedSource.value[1]
        let dist2 = x1*x1 + y1*y1
        this.cost = (dist1+dist2)*100
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<h3>Total Cost :<font color='green'>{this.cost}</font></h3>)
    }
  }

render() {
    var selectedSource;
    var selectedDest;
  return(
  <div>
    <Select
    placeholder="Select Source"
    options={this.data}
    value={selectedSource}
    onChange={this.handleSource}
  />


<Select
    placeholder="Select Destination"
    options={this.data}
    value={selectedDest}
    onChange={this.handleDest}
  />

<button type='submit' onClick={this.calculateCost}>Calculate Cost</button>
 </div> 
  )
  }
   
}

export default DistanceCalculator