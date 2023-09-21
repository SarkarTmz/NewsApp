import React from 'react'
import { useEffect, useState} from 'react'
// import '../styles/Home.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"

const Single = () => {
    const {id} = useParams();
  const navigate = useNavigate()

  const [news, setNews] = useState([])

  const fetchNews = async() => {
    const response = await axios.get("https://64ee096e1f872182714237b9.mockapi.io/blog/" + id)
    // console.log(response.data)
    // setNews(response.data)
    if(response.status == 200){
      setNews(response.data)
      // console.log(news)
    }
  }


    // delete news 
  const deleteNews = async (id)=>{
    const response = await axios.delete("https://64ee096e1f872182714237b9.mockapi.io/blog/" + id)
    navigate('/breaking');
  }

    useEffect(() => {
      fetchNews();
    }, [])
    

  return (
    <>
        <div className="card container section">
            <div className='item'>
                <img src={news.avatar} alt="" />
                <p>{news.author}</p>
                <p>{news.title}</p>
                <p>{news.description}</p>
                {/* <p>{newsItem.url}</p> */}
                <p>{news.createdAt}</p>
                <p>{news.content}</p>
                <button className='btn' onClick={() => deleteNews(news.id)}>Delete Blog</button>
            </div>
        </div>
           </>
  )
}

export default Single