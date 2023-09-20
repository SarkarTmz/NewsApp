import React from 'react'
import { useEffect, useState} from 'react'
// import '../styles/Home.css'
import axios from 'axios'

const Breaking = () => {

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

    // delete news 
    const deleteNews = async (id)=>{
      const response = await axios.delete("https://64ee096e1f872182714237b9.mockapi.io/blog/" + id)
      // if(response.status == 200){
      //   setNews(response.data)
      //   // console.log(news)
      // }
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
              <button className='btn' onClick={() => deleteNews(newsItem.id)}>Delete Blog</button>
            </div>
          )
        })
      }
    </>
  )
}

export default Breaking