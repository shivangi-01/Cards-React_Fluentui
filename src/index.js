import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './App';
import Tdata from './Tdata';
import CardVerticalExample from './Cards';
import Cart from './Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <>
   <div className="ms-Grid" dir="ltr">
     
   <div className="ms-Grid-row">
  <h3>
    <center>
    List of tutorials
    </center>
  </h3>
  </div>
    {/* <Card 
    imgsrc={Tdata[0].imgsrc}
    title={Tdata[0].title}
    sname={Tdata[0].sname}
    link={Tdata[0].link}
    />
      <Card 
    imgsrc={Tdata[1].imgsrc}
    title={Tdata[1].title}
    sname={Tdata[1].sname}
    link={Tdata[1].link}
    />
      <Card 
    imgsrc={Tdata[2].imgsrc}
    title={Tdata[2].title}
    sname={Tdata[2].sname}
    link={Tdata[2].link}
    /> */}
   
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
    <CardVerticalExample
    imgsrc={Cart[0].imgsrc}
    text1={Cart[0].text1}
    text2={Cart[0].text2}
    link={Cart[0].link}
    />
    </div>
    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
      <CardVerticalExample
    imgsrc={Cart[1].imgsrc}
    text1={Cart[1].text1}
    text2={Cart[1].text2}
    link={Cart[1].link}
    />
    </div>
    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
      <CardVerticalExample
    imgsrc={Cart[2].imgsrc}
    text1={Cart[2].text1}
    text2={Cart[2].text2}
    link={Cart[2].link}
    />
    </div>
    </div>
</div>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
