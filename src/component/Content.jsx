import React,{useEffect,useState} from 'react'
import axios from 'axios'
import'./content.css'

const Content = () => {
    const[item,setItem]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>setItem(Response.data))
        .catch(error=>console(error))
    },[])
  return (
    <div className='container'>
            {
                item.map(item=>(
                    <li className='list-item' key={item.id} >
                        <div>
                        <h2>{item.title}</h2>
                        </div>
                        <div>
                        <p>Id:{item.id} User ID {item.userId} </p>
                        </div>
                        <div style={{textAlign:'justify',border:'1px solid black',padding:'10px'}} >
                        {item.body}
                        </div>
                    </li>
                ))
            }
    </div>
  )
}

export default Content