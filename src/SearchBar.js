import "./SearchBar.css";
import { useState } from "react";

const apiKey = "6e6dce059cb14f7995ef759d35c306cf";

function SearchBar({ setRecipes, setLoading, setHasSearched }) {
    const [query, setQuery] = useState("");

    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    function handleSearch() {
        if (!query.trim()) {
            console.log("Please enter an ingredient");
            return;
        }

        setLoading(true);
        setHasSearched(true);

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=12&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log("Recipes found:", data);
                setRecipes(data || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching recipes:", error);
                setRecipes([]);
                setLoading(false);
            });
    }

    function handleClear() {
        setQuery("");
        setRecipes([]);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by ingredient..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default SearchBar;