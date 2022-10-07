import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


function Home() {

 const {data,loading,error,setData} = useFetch("http://localhost:8000/yazilar");



  
  return (
    <div className='home'>
      {loading && <h1 className='loading'>Yükleniyor....</h1>}
      {error && <h3 className='error'>{error}</h3>}
      {data && <BlogList bloglar={data} baslik={'Bütün Yazılar'} />}
    </div>
  )
}

export default Home