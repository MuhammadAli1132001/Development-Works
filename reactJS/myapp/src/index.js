import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name = "Ali";
const time_dte = new Date();
const hour = time_dte.getHours();
const year = time_dte.getFullYear();

let msg;
const color_time = {color: ""};

if (hour < 12) {
    msg = "good morning"
    color_time.color = "green"
}

else if (hour > 12) {
    msg = "good afternoon"
    color_time.color = "red"
    }

else  {
    msg = "good night"
    color_time.color = "dark"
    }

ReactDOM.render(

<div>
    <p>this created by {name} </p>
    <p>time in hour {hour} </p>
    <p> in years {year} </p>   
    <h1 className='heading' style={color_time}>{msg}</h1>
 
</div>

 ,document.getElementById("root")
 );
