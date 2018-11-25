import React, { Component,Fragment } from 'react';

import './App.css';

const Temp=()=>{
  return (
          <Fragment>
             <div key="123">Hello</div>,
               <div key="256">How R threspasser</div>
          </Fragment>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <br/>
      <h1>how R u vyshnav</h1>
       <Temp/>
      </div>
    );
  }
}

export default App;
