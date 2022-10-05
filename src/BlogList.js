import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({bloglar,baslik,remove}) {
  return (
    <div className='blog-list'>
        <h2 style={{color:'#ff793f'}}>{baslik}</h2>
        {
            bloglar.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
               <Link to={`/blog/${blog.id}`}>
                <h2>{blog.ad}</h2>
                <p>Yazar : {blog.yazar}</p>
               </Link>
               <button onClick={()=>remove(blog.id)} style={{color:'#ff793f',backgroundColor:'transparent'}}>Sil</button>

            </div>
          ))}
    </div> 
  )
}

export default BlogList