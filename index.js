import React from 'react';
import ReactDOM from 'react-dom/client';
import {Sum}from"./App.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
// const name="jitendra"
// root.render(
//   <h1>hello {name}</h1>
// );
// root.render(
//   <h1>hello world</h1>
// );
const a=100;
const b=300;
root.render(
  <>
  total :<Sum num1={a} num2={b} />
  </>
  
);

