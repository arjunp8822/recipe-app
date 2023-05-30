import React from 'react'
import './Home.css'
import RecipeCard from '../components/RecipeCard'
import Burger from '../assets/burger.jpg'

const Home = () => {
    return (
        <section>
            <div className='container home-container'>

                <RecipeCard
                    img={Burger}
                    title='Burger'
                    name='Arjun'
                    time={60}
                    description='This is a test description about a burger'
                />

                <RecipeCard
                    img={Burger}
                    title='Burger'
                    name='Arjun'
                    time={60}
                    description='This is a test description about a burger'
                />

                <RecipeCard
                    img={Burger}
                    title='Burger'
                    name='Arjun'
                    time={60}
                    description='This is a test description about a burger'
                />

            </div>
        </section>
    )
}

export default Home