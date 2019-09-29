import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "./Recipe";

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
    <div className="App" onSubmit={handleSubmit}>
      <form className="search-form">
        <input type="text" className="search-bar" value={search}  onChange={handleChange}/>
        <button type="submit" className="search-button">
          search
        </button>
        {recipes.map((recipe, idex) => (
          <Recipe key={idex} recipe={recipe} />
        ))}
      </form>
    </div>
  );
}

export default App;
