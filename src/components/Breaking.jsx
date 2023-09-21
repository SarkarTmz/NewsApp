import React from 'react'
import { useEffect, useState} from 'react'
// import '../styles/Home.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Breaking = () => {

  const navigate = useNavigate()

  const [news, setNews] = useState([])

  const fetchNews = async() => {
    const response = await axios.get("https://64ee096e1f872182714237b9.mockapi.io/blog")
    console.log(response.data)
    // setNews(response.data)
    if(response.status == 200){
      setNews(response.data)
      // console.log(news)
    }
  }
    
    useEffect(() => {
      fetchNews();
    }, [])
    

  return (
    <>
      {
        news.map((newsItem) =>{
          return(
            <div className="card container section">
              <div className='item'>
                <img src={newsItem.avatar} alt="" />
                <p>{newsItem.author}</p>
                <p>{newsItem.title}</p>
                <p>{newsItem.description}</p>
                {/* <p>{newsItem.url}</p> */}
                <p>{newsItem.createdAt}</p>
                <p>{newsItem.content}</p>
              </div>
              <div className='bts' >
              <p onClick={()=>navigate("/single/" + newsItem.id)}>See More</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Breaking