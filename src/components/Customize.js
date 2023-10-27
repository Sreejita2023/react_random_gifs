import React, { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { useEffect } from 'react'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const Customize =()=>{
  const [gifs,setgifs]=useState()
  const [values,setvalues]=useState(
      {gif_type:""}
  )
  const [loading,setLoading]=useState(false)
  async function fetchData(){
    setLoading(true)
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const output=await axios.get(url)
    const temp=output.data.data.images.downsized_large.url
    setgifs(temp)
    setLoading(false)
  }
  async function customData(){
    setLoading(true)
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q="${values.gif_type}"&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const output=await axios.get(url)
    const temp=output.data.data[0].images.fixed_height.url
    console.log(temp)
    setgifs(temp)
    setLoading(false)
  }
  function changeHandler(event){
    const {name,value}=event.target
    setvalues((prev)=>({
      ...prev,[name]:value
    }))
  }
  function clickHandler(){
    customData()
  }
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
       <div>
          <input type='text' name='gif_type' onChange={changeHandler} value={values.gif_type}/>
       </div>
       <button onClick={clickHandler} className='bg-white w-10/12 font-medium capitalize  rounded-md'>Generate</button>
    </div>
  )
}

export default Customize