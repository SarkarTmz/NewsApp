import React from 'react'
import { useEffect, useState} from 'react'
import '../../styles/Home.css'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [news, setNews] = useState([])

  const fetchNews = async() => {
    const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_29574bfa3f6a63368bbe6f448c9edf9f774ee&q=social")
    // console.log(response.data.results[0].description)
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
                <img src={newsItem.image_url} alt="" />
                <p>{newsItem.author}</p>
                <h3>{newsItem.title}</h3>
                <p>{newsItem.description}</p>
                {/* <p>{newsItem.url}</p> */}
                <p className='mini'>{newsItem.pubDate}</p>
                <p className='mini'>{newsItem.country}</p>
                  <button className='btn' onClick={()=>navigate("/details/" + newsItem.article_id)} >View More</button>
                </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Home