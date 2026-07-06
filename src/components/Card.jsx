import React from 'react'
import { History } from 'lucide-react';
import {UsersRound} from 'lucide-react';
import {ChefHat} from 'lucide-react';

const Card = ({recipe}) => {
  return (
    <div>
        <div className="card">
            <div className="card-img">
                <img src={recipe.image} alt="Card Image" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{recipe.title}</h2>
                <p className="card-description">{recipe.description}</p>
            </div>
            <div className="card-tags">
                <div className="tag">
                    
                <span className="card-tag">
                    <History size={15} />
                    {recipe.time}
                    </span>
                    <span>|</span>
                <span className="card-tag">
                   <UsersRound size={15} />
                    {recipe.servings}
                    </span>
                    <span>|</span>
                <span className="card-tag">
                    <ChefHat size={15}/>
                    {recipe.difficulty}</span>
                </div>
                
            </div>
            <div className="card-footer">
                <button className="card-button">Start Cooking</button>
            </div>
        </div>
      
    </div>
  )
}

export default Card
