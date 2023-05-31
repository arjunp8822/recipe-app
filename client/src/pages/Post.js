import React, { useEffect, useState } from 'react'
import './Post.css'
import { useParams } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'

const Post = () => {

    const { id } = useParams()

    const [postData, setPostData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/post/${id}`)
            const data = await response.json()
            setPostData(data)
        }
        fetchData()
    }, [])

    console.log(postData)

    if (!postData) {
        return (
            <section>
                <div className='container post-container'>
                    No Data Found
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className='container post-container'>
                <h3>{postData.title}</h3>
                <div className='post-info'>
                    <h5 className='author'>By {postData.author.username}</h5>
                    <div className='recipe-card-time'>
                        <AiOutlineClockCircle />
                        <h5>{postData.time} mins</h5>
                    </div>
                </div>
                <img src={`http://localhost:4000/${postData.cover}`} className='post-img' />
                <h4>{postData.summary}</h4>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} className='post-content' />
            </div>
        </section>
    )
}

export default Post