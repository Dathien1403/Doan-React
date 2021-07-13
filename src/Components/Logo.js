import React from 'react'; 
import './Comp.css';

export default function Logo(){
    const style = {
        color:'white',
        fontSize:'30px'
    };
    return(
        <div>
            <p style={style}>cibus</p>
        </div>
    );
}