import React from 'react';
import { useState } from 'react';

function Create() {

  const [baslik,setBaslik] = useState("");
  const [aciklama,setAciklama] = useState("");
  const [yazar,setYazar] = useState("--Seçiniz--");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const yazi = {baslik,aciklama,yazar};
    console.log(yazi);
  }

  return (
    <div className='create'>
        <h2 style={{color:'#ff793f'}}>Yeni Yazı Ekle</h2>
      <form onSubmit={handleSubmit} >

        <label>Yazı Başlık:</label>
        <input type="text" value={baslik} required onChange={(e)=>setBaslik(e.target.value)}/>

        <label>Yazı Açıklama:</label>
        <textarea required value={aciklama} onChange={(e)=>setAciklama(e.target.value)}>

        </textarea>

        <label>Yazar:</label>
        <select value={yazar} onChange={(e)=>setYazar(e.target.value)}>
            <option value="">--Seçiniz--</option>
            <option value="Sinan Sarıçayır">Sinan Sarıçayır</option>
            <option value="Veysel Şimşir">Veysel Şimşir</option>
            <option value="Anıl akar">Anıl akar</option>
        </select>
        <button>Ekle</button>
      </form>
    </div>
  )
}

export default Create