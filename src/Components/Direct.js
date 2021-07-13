import React from 'react'; 
import './Comp.css';
import {Link} from 'react-router-dom';
import Item1 from './Item1';

export default function Direct(){
    return(
        <Link to="/item1"><button>Chuyển qua sản phẩm 1</button></Link>
    );
}