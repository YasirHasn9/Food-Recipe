import React from 'react'


function Recipe({recipe}) {
    return (
        <div>
            <h1>{recipe.recipe.label}</h1>
            <p>{Math.ceil(recipe.recipe.calories)}</p>
            <img src={recipe.recipe.image} alt="" />
        </div>
    )
}

export default Recipe
