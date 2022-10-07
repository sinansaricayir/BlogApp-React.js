import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {

  const [ad,setAd] = useState("");
  const [aciklama,setAciklama] = useState("");
  const [yazar,setYazar] = useState("--Seçiniz--");

  const[loading,setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const yazi = {ad,aciklama,yazar};
    setLoading(true);

    fetch("http://localhost:8000/yazilar",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(yazi)

    }).then(()=>{
      console.log("yazı eklendi");
      setLoading(false);
      // history.go(-1);
      history.push("/");
    });
    
  }



  return (
    <div className='create'>
        <h2 style={{color:'#ff793f'}}>Yeni Yazı Ekle</h2>
      <form onSubmit={handleSubmit} >

        <label>Yazı Başlık:</label>
        <input type="text" value={ad} required onChange={(e)=>setAd(e.target.value)}/>

        <label>Yazı Açıklama:</label>
        <textarea required value={aciklama} onChange={(e)=>setAciklama(e.target.value)}>

        </textarea>

        <label>Yazar:</label>
        <select value={yazar} onChange={(e)=>setYazar(e.target.value)}>
            <option value="">--Seçiniz--</option>
            <option value="Sinan Sarıçayır">Sinan Sarıçayır</option>
            <option value="Veysel Şimşir">Veysel Şimşir</option>
            <option value="Anıl akar">Anıl akar</option>
            <option value="Derya Yılmaz">Derya Yılmaz</option>

        </select>
        {!loading && <button>Ekle</button>}
        {loading && <button>Yükleniyor ... </button>}
      </form>
    </div>
  )
}

export default Create