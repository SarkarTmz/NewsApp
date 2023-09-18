import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Solo = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_29574bfa3f6a63368bbe6f448c9edf9f774ee&q=general"
      );

      if (response.status === 200) {
        setNews(response.data.results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);



  return (
    <>
          <div key={newsItem.id} className="card container section">
            <div className="item">
                <p>{newsItem?.title}</p>
            </div>
          </div>
    </>
  );
};

export default Solo;
