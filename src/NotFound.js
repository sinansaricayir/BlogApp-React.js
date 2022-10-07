import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <div className='not-found'>
            <h1>Geçersiz İşlem !</h1>
            <p>Sayfa Bulunamadı</p>
            <Link to={"/"}>Anasayfa ya </Link>
        </div>
    </div>
  )
}

export default NotFound