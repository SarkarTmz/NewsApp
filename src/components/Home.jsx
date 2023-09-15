import React from 'react'
import { useEffect, useState} from 'react'
import '../styles/Home.css'
import axios from 'axios'

const Home = () => {

  const [news, setNews] = useState([])

  const fetchNews = async() => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ae2ea196d81647079b5524e6370cf636")
    // console.log(response.data)
    // setNews(response.data)
    if(response.status == 200){
      setNews(response.data.articles)
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
              <img src={newsItem.urlToImage} alt="" />
                <div className='item'>
                  <p>{newsItem.author}</p>
                  <p>{newsItem.title}</p>
                  <p>{newsItem.description}</p>
                  {/* <p>{newsItem.url}</p> */}
                  <p>{newsItem.publishedAt}</p>
                  <p>{newsItem.content}</p>
                </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Home