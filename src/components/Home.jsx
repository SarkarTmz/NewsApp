import React from 'react'
import { useEffect, useState} from 'react'
import '../styles/Home.css'
import axios from 'axios'
import { Link, useNavigate  } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [news, setNews] = useState([])

  const fetchNews = async() => {
    const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_29574bfa3f6a63368bbe6f448c9edf9f774ee&q=general")
    console.log(response.data.results[0].description)
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
               <img src={newsItem.image_url} alt="" />
                <div className='item'>
                  {/* <p>{newsItem.author}</p> */}
                  <p>{newsItem.title}</p>
                  <p>{newsItem.description}</p>
                  {/* <p>{newsItem.url}</p> */}
                  <p className='mini'>{newsItem.country}</p>
                  <p className='mini'>{newsItem.pubDate}</p>

                  {/* <button><Link to="/details">About</Link></button> */}
                  <button onClick={()=>navigate("/details/" + news.name)} >Edit</button>
                </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Home