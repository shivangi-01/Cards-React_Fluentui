import React from 'react';
import logo from './logo.svg';
import './App.css';


function Card(props){
  return(
  <>
  <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="mypic" className="card_img"/>
      <div className="card_info">
        <span className="card-category"> {props.title}</span>
  <h3 className="card_title"> {props.sname}</h3>
        <a 
        href={props.link}
        target="_blank">
          <button> watch now</button>
        </a>
      </div>
          </div>

  </div>
  </>
  )
}


export default Card;
