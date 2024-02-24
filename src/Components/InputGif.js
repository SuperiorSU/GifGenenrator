import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const InputGif = () => {
    
  const [keyword, setKeyword] = useState('')
  const [gif, setGif] = useState('');
// adding tag to the api to make it recieve keywords
  const url = `https://api.giphy.com/v1/gifs/random?api_key=CtL49Hi2PoohjUPW1f11WQtQ5qZKJU6A&tag=${keyword}`

  const [loading, setLoading] = useState(false);

  async function fetchData(){
    setLoading(true)
    const /*output*/ {data} = await axios.get(url);  //since a network call we need to use await keyword. Axios is based on promise

    // console.log(output) ---> data->data->images->downsized_large->url
    const imageSource = data.data.images.downsized_large.url
    setGif(imageSource)
    setLoading(false)
  }
//   for input control
  function changeHandler(event){
    setKeyword(event.target.value);
  }
  useEffect(()=>{
    fetchData();
  },[]) 
  function generateHandler(){
    fetchData()
  }


  return (
    <div className='bg-slate-900 p-6 m-auto rounded-2xl shadow-md shadow-slate-700 min-w-[320px] max-w-[500px] mt-5 border-[6px] border-slate-800'>
      <h1 className='p-2 rounded-xl bg-slate-800 font-semibold text-slate-200 uppercase text-xl' >Keyword GIF Generator</h1>
      <div className='bg-slate-800 m-auto mt-2 mb-2 rounded-xl h-[430px] p-2'>
        {
          loading?(<Spinner/>):<img alt='lol' className='w-full h-full rounded-lg' src={gif}/>
        }
        
      </div>
      <input type='text' placeholder='Enter Keywords...' className='p-2 bg-slate-400 border-0 text-center rounded-lg placeholder:text-slate-700 w-full'
      onChange={changeHandler}
      value={keyword}/>


      <button className='bg-yellow-400 m-auto mt-2 w-full rounded-xl p-2 border-b-2 border-yellow-100 text-[20px] font-medium' onClick={generateHandler}>Generate</button>
    </div>
  )
}
export default InputGif;