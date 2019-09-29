import React, {useEffect , useState} from "react";
import "../App.css"
import Recipe from "./Recipe"

function App() {
  const APP_ID = "10682a74"
  const APP_KEY = "d0dc35c37583a16ac9f49e7858536672"

  
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("")

  useEffect(  () => {
    getRecipes()
  },[ ])
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  const handleSubmit = e  => {
    e.preventDefault()
  }
  return (
    <div className="App" onSubmit={handleSubmit}>
     <form className="search-form">
       <input type="text" className="search-bar" />
       <button type="submit" className="search-button"> search </button>
       {recipes.map((recipe,idex) => <Recipe key={idex} recipe={recipe} />)}
     </form>
    </div>
  );
}

export default App;
