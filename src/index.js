import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

// function ncard(val){
//     return (
    
//     )
// }

ReactDOM.render
(<>
<h1 className= 'heading_style'>Top Netflix Series</h1>


{Sdata.map((val) => {
    return (
    <Card
    imgsrc = {Sdata[0].imgsrc}
    title = {Sdata[0].title}
    sname = {Sdata[0].sname}
    link = {Sdata[0].link}
     />

    )
})}
 </> , document.getElementById('root'));