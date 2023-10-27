import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

const Random =() => {
  const [loading,setLoading]=useState(false)
  async function fetchData(){
    setLoading(true)
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const output=await axios.get(url)
    const temp=output.data.data.images.downsized_large.url
    setGifs(temp)
    setLoading(false)
  }
  function clickHandler(){
    fetchData()
  }
  const [gifs,setGifs]=useState()

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className=" bg-green-500 w-6/12 text-center  py-2 gap-y-1.5 rounded-md mx-auto flex-col items-center">
       <h1 className='font-semibold text-xl uppercase underline underline-offset-4'>a random gif</h1>
        
        <div className='w-full flex-row justify-center min-h-[100px]'>
        `{
             loading?<Spinner/> : <img src={gifs} width="300" height="350" className='mx-auto overflow-y-hidden'/>
          }`
        </div>

       <button onClick={clickHandler} className='bg-white w-10/12 font-medium capitalize  rounded-md'>Generate</button>
    </div>
  )
}

export default Random