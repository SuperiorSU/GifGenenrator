import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = `https://api.giphy.com/v1/gifs/random?api_key=CtL49Hi2PoohjUPW1f11WQtQ5qZKJU6A`
function useAPI(tag) {
    
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
 

  
  
    async function fetchData(tag){ //
      setLoading(true)
      const /*output*/ {data} = await axios.get(tag ? `${url}&tag=${tag}`:url); 
       //since a network call we need to use await keyword. Axios is based on promise
  
      // console.log(output) ---> data->data->images->downsized_large->url
      const imageSource = data.data.images.downsized_large.url
      setGif(imageSource)
      setLoading(false)
    }
  //   for input control
    
    useEffect(()=>{
      fetchData();
    },[]) 
    return {gif,loading,fetchData};
}

export default useAPI;
