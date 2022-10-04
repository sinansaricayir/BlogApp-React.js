import React from 'react';
import {useState,useEffect} from 'react';
import BlogList from './BlogList';

function Home() {

 

  const [blogs,setBlogs] = useState(null);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState(null);


 useEffect(()=>{
    fetch("http://localhost:8000/yazilar")
    .then(res=>{
      if(!res.ok) throw Error('Veriler Çekilemedi ...');
      return res.json();
    })
    .then(data=>{
     //console.log(data);
      setBlogs(data);
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false);
      setError(err.message);
    })
 },[]);

  const remove = (id) =>{
    const newBlogs=blogs.filter(blog=>blog.id !== id)
    setBlogs(newBlogs)
  }

  
  return (
    <div className='home'>
      {loading && <h1 className='loading'>Yükleniyor....</h1>}
      {error && <h3 className='error'>{error}</h3>}
      {blogs && <BlogList bloglar={blogs} baslik={'Bütün Yazılar'} remove={remove} />}
    </div>
  )
}

export default Home