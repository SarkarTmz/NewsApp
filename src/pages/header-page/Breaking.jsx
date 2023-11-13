import React from 'react'
import { useEffect, useState} from 'react'
import '../../styles/Breaking.css'
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
      <div className="top-breaking">
          {
            news.map((newsItem) =>{
              return(
                <div className="breaking-card container section">
                  <div className='item'>
                    <img src={newsItem.avatar} alt="" />
                    <p className='title'>{newsItem.title}</p>
                    <p className=''>{newsItem.description}</p>
                    <p>{newsItem.createdAt}</p>
                    <div className='bts' >
                    <p onClick={()=>navigate("/single/" + newsItem.id)} >See More</p>
                    </div>
                  </div>
        
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export default Breaking