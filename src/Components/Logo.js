import React from 'react'; 
import './Comp.css';

export default function Logo(){
    const style = {
        color:'white',
        fontSize:'30px'
    };
    return(
        <div className="logo">
            <p style={style}>cibus</p>
        </div>
    );
}