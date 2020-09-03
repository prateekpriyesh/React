import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const fname = "Prateek";
const lname = "Priyesh";
const img = "https://picsum.photos/200/300";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/800/300";
const link = "https://chowak.com"


ReactDOM.render( <>
<h1 className="heading">{`My name is ${fname} ${lname}`}</h1>
<div className="imgstyle">
<img src = {img} alt="random img"/>
<img src = {img1} alt="random img"/>
<a href = {link} target="_">
<img src = {img2} alt="random img"/>
</a>
</div>
</>, document.getElementById('root'));