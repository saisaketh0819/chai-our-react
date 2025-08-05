import React from 'react'
import { useEffect,useState } from 'react'
function Github() {
    const[data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/saisaketh0819')
        .then(response => response.json())
        .then(data => {
            setData(data)
            console.log(data)
        })
    }, [])
    
  return (
    <div className='bg-gray-700 text-white text-3xl'>Github followers: {data.followers} </div>
  )
}

export default Github