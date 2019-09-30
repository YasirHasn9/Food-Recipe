import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "./Recipe";
import {Button ,Input, Card, CardImg, CardText, CardBody,
         CardTitle, CardSubtitle} from "reactstrap"


function App() {
  const APP_ID = "10682a74";
  const APP_KEY = "d0dc35c37583a16ac9f49e7858536672";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search)
  };
  const handleChange = e =>{
    setSearch(e.target.value)
  }
  return (
    <div className="App" onSubmit={handleSubmit} >
      <form className="search-form">


      <div className="input-search">
        <Input style={{
          borderRadius:"20px"
        }} type="text" style={{
          padding:"20px",
          margin:"2px",
        }} value={search}  onChange={handleChange}/>
        <Button type="submit" color="primary" style={{
          borderRadius:"10px 0",
        }}>
          search
        </Button>
        </div>



  <div className="recipes">
{recipes.map((recipe, idex) => (
          <Recipe key={idex} recipe={recipe} />
        ))}
        </div>

      </form>
    </div>
  );
}

export default App;
