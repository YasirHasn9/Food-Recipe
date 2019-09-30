import React from "react";
import style from "./recipe.module.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";


function Recipe({ recipe }) {
  return (
    <Card className={style.recipe}>
    <CardTitle className={style.title}>{recipe.recipe.label}</CardTitle>
    <div className={style.image}>
      <CardImg src={recipe.recipe.image} alt="" style={{
          borderRadius:"20px"
      }}/>
      </div>
      <div className={style.info} >
      <CardSubtitle style={{
          fontSize:"1.4rem",
          margin:"10px 0"
      }}>Calories: {Math.ceil(recipe.recipe.calories)}</CardSubtitle>
      <ol className={style.ol}>
        {recipe.recipe.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      </div>
    </Card>
  );
}

export default Recipe;
