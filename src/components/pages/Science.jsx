import React from 'react'
import { useEffect, useState} from 'react'
// import '../styles/Home.css'
import axios from 'axios'

const Science = () => {

  const [news, setNews] = useState([])

  const fetchNews = async() => {
    const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_29574bfa3f6a63368bbe6f448c9edf9f774ee&q=science")
    console.log(response.data)
    // setNews(response.data)
    if(response.status == 200){
      setNews(response.data.results)
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
                <img src={newsItem.urlToImage} alt="" />
                <p>{newsItem.author}</p>
                <p>{newsItem.title}</p>
                <p>{newsItem.description}</p>
                {/* <p>{newsItem.url}</p> */}
                <p>{newsItem.pubDate}</p>
                <p>{newsItem.country}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Science