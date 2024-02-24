import React, { useState } from 'react'

import { Spinner } from './Spinner';
import useAPI from '../Hooks/useAPI';
// import { useAPI } from '../Hooks/useAPI';

const Random = () => {
const {gif, loading, fetchData} = useAPI()
function clickHandler(){
  fetchData()
}
  return (
    <div className='bg-slate-900 p-6 m-auto rounded-2xl shadow-md shadow-slate-700 min-w-[320px] max-w-[500px] mt-5 border-[6px] border-slate-800'>
      <h1 className='p-2 rounded-xl bg-slate-800 font-semibold text-slate-200 uppercase text-xl' >Random GIF Generator</h1>
      <div className='bg-slate-800 m-auto mt-2 mb-2 rounded-xl h-[430px] p-2'>
        {
          loading?(<Spinner/>):<img alt='lol' className='w-full h-full rounded-lg' src={gif}/>
        }
        
      </div>
      <button className='bg-yellow-400 m-auto w-full rounded-xl p-2 border-b-2 border-yellow-100 text-[20px] font-medium' onClick={clickHandler}>Generate</button>
    </div>
  )
}
export default Random;