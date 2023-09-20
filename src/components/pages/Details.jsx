import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {article_id} = useParams();
  // console.log(article_id)

  const [news, setNews] = useState()

    const fetchNews = async ()=>{
      const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_29574bfa3f6a63368bbe6f448c9edf9f774ee&q=social" + article_id)
        if(response.status == 200){
          setNews(response.data)
        }
        console.log(response)
    }
  useEffect(() => {
    fetchNews()
  }, [])
  

  return (
    <div>
      {news ? (
        <>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Details