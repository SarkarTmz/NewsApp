import { useState } from 'react'
import React from 'react'
import '../../styles/Addnews.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Addnews = () => {

  const navigate = useNavigate();

        const [title, setTitle] = useState("")
        const [content, setContent] = useState("")
        const [description, setDescription] = useState("")
        const [avatar, setAvatar] = useState("")
        // console.log(title)
        // console.log(image)
    
        const createNews = async(e)=>{
            e.preventDefault()
            const data = {
                title : title,
                description : description,
                avatar : avatar,
                content : content
            }
            const response = await axios.post("https://64ee096e1f872182714237b9.mockapi.io/blog", data)
            console.log(response)
            navigate('/breaking');
        }
    
    



  return (
    <>
        <div className='conatainer news section'>
            <form onSubmit={createNews}>
                <h2>Add News From Here</h2>
              <div>
                <label htmlFor="name">News Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="name">Description</label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  rows="6"
                  onChange={(e)=>setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="name">Content</label>
                <textarea
                  type="text"
                  id="content"
                  name="content"
                  rows="10"
                  onChange={(e)=>setContent(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="name">Image Link</label>
                <input
                  type="text"
                  id="avatar"
                  name="avatar"
                  onChange={(e)=>setAvatar(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
    </div>
    </>
  )
}

export default Addnews