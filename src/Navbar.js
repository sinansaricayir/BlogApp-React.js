import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>SSA Blog</h1>
        <div className='links'>
            <a href='/'>Anasayfa</a>
            <a href='/create' style={{
              color:'white',
              backgroundColor:'#ff793f',
              borderRadius:'8px'
            }}>Yeni Yazı</a>
        </div>
    </nav>
  )
}

export default Navbar