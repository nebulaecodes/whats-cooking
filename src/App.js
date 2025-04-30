import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

function handleReset() {
  setRecipes([]);
  setLoading(false);
  setHasSearched(false);
}

  return (
    <div className="app-title">
      <h1 onClick={handleReset} style={{ cursor: "pointer" }}>🍳 What's Cooking?</h1>
      <SearchBar
        setRecipes={setRecipes}
        setLoading={setLoading}
        setHasSearched={setHasSearched}
      />
      {loading ? <p className="loading">Loading recipes...</p> : <RecipeList recipes={recipes} hasSearched={hasSearched} />}
    </div>
  );
}

export default App;