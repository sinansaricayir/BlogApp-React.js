import {useState,useEffect} from 'react';

//npx json-server --watch data/db.json --port 8000
const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
          if(!res.ok) throw Error('Veriler Çekilemedi ...');
          return res.json();
        })
        .then(data=>{
         //console.log(data);
         setData(data);
          setLoading(false);
        })
        .catch(err=>{
          setLoading(false);
          setError(err.message);
        })
     },[url]);

    return {data,loading,error,setData};

}

export default useFetch