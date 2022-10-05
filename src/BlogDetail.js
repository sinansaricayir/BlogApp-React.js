import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetail() {

    const {id} = useParams();

    const{data:blog,error,loading} = useFetch("http://localhost:8000/yazilar/"+id);


  return (
    <div className='blog-detail'>
        {blog && (
            <article>
                <h2>{blog.ad}</h2>
                <p>Yazar : {blog.yazar}</p>
                <div>{blog.aciklama}</div>
            </article>
        )}
    </div>
  )
}

export default BlogDetail