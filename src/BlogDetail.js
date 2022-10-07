import React from 'react';
import { useParams,useHistory } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetail() {

    const {id} = useParams();

    const history = useHistory();

    const{data:blog,error,loading} = useFetch("http://localhost:8000/yazilar/"+id);

    const handleDelete = () =>{
        fetch("http://localhost:8000/yazilar/"+id,{
          method:"DELETE"
        }).then(()=>{
          console.log("silindi")
          history.push("/");
        });
    }


  return (
    <div className='blog-detail'>
        {blog && (
            <article>
                <h2>{blog.ad}</h2>
                <p>Yazar : {blog.yazar}</p>
                <div>{blog.aciklama}</div>
                <button onClick={handleDelete}>Sil</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetail