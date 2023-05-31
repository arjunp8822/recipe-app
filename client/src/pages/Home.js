import React, { useEffect, useState } from 'react'
import './Home.css'
import RecipeCard from '../components/RecipeCard'
import Burger from '../assets/burger.jpg'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/post')
            const data = await response.json()
            setPosts(data)
        }
        fetchData()
    }, [])

    return (
        <section>
            <div className='container home-container'>

                {posts.length > 0 && posts.map((post) => (
                    <RecipeCard
                        title={post.title}
                        time={post.time}
                        description={post.summary}
                        img={post.cover}
                        author={post.author}
                        id={post._id}
                    />
                ))}

            </div>
        </section>
    )
}

export default Home