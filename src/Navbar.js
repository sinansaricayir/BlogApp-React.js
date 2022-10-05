import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>SSA Blog</h1>
        <div className='links'>
           <Link to={"/"} className='link'>Anasayfa</Link>
           <Link to={"/create"} style={{
            color:"white",
            backgroundColor:"#ff793f",
            borderRadius:"8px"
           }}>Yeni Yazı Ekle</Link>
        </div>
    </nav>
  )
}

export default Navbar