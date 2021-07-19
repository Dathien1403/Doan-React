
import React from 'react';
import './Comp.css';
import {Link} from 'react-router-dom';

export default function Menu(){

    const linkStyle = {
        color:'black',
        textDecoration: 'none',
        paddingRight: '60px',
        fontSize:'20px'
    };
    return(
        <div>
            <div  className="menu">
            <Link style={linkStyle} to="/"><p>Trang chủ</p></Link>
            <Link style={linkStyle} to="/product"><p>Sản phẩm</p></Link>
            <Link style={linkStyle} to="/about"><p>Giới thiệu</p></Link>
            <Link style={linkStyle} to="/product"><p>Quản lý</p></Link>
            </div>
        </div>
    );
}