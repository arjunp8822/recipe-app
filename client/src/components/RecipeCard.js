import React from 'react'
import './RecipeCard.css'
import { AiOutlineClockCircle } from 'react-icons/ai'

const RecipeCard = (props) => {
    return (
        <div className='recipe-card-container'>
            <img src={props.img} alt='test' />
            <h3>{props.title}</h3>
            <div className='recipe-card-summary'>
                <h5>By {props.name}</h5>
                <div className='recipe-card-time'>
                    <AiOutlineClockCircle />
                    <h5>{props.time} mins</h5>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default RecipeCard