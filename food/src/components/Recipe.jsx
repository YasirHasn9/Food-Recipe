import React from "react";
import style from "./recipe.module.css";
import { CardSubtitle } from "reactstrap";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 40%;
  margin: 2% 0;
  border-radius: 20px;
  box-shadow: 2px 2px blur;
  -webkit-box-shadow: -3px 6px 17px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: -3px 6px 17px 0px rgba(0, 0, 0, 0.71);
  box-shadow: -3px 6px 17px 0px rgba(0, 0, 0, 0.71);
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  width:80%;
  margin: 20px auto;
  padding: 15px 0;
  border-bottom: 2px solid orange;
  text-align: center;
  font-size:2.1rem;
}
`;

const DivOfImg = styled.div`
  width: 90%;
  margin: 10px auto;
`;

const Img = styled.img`
  width: 90%;
  margin: 0 auto;
  border-radius: 50%;
  transition: 0.6s ease;
  opacity: 0.6;
  &:hover {
    border-radius: 0%;
    opacity: 1;
    border-radius: 10%;
  }
`;
const Ol = styled.ol`
  list-style: none;
  li {
    font-size: 1.2rem;
  }
`;

const Info = styled.div`
  margin: 10px 30px;
`;

function Recipe({ recipe }) {
  return (
    <CardStyle>
      <Title>{recipe.recipe.label}</Title>

      <DivOfImg>
        <Img src={recipe.recipe.image} alt={recipe.recipe.label} />
      </DivOfImg>

      <Info>
        <CardSubtitle
          style={{
            fontSize: "1.4rem",
            margin: "10px 0"
          }}
        >
          Calories: {Math.ceil(recipe.recipe.calories)}
        </CardSubtitle>
        <Ol>
          {recipe.recipe.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </Ol>
      </Info>
    </CardStyle>
  );
}

export default Recipe;
