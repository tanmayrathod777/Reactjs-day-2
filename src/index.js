import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header';
import Prop from './prompt.js'
import Greet from './funcVSclass';
import Welcome from './classConstructor';

function Clock(props) {
  return(
    <div>
      <h1>{props.date.toLocaleTimeString()}</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center>
    <Header />
   <Greet />
    <Prop name="Bruce" heroName ="Batman" />
   
    <Prop name="Clark" heroName = "Superman"/>
    <App />
    <Welcome />
    
    </center>
   
  </React.StrictMode>
);


