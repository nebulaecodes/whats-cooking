import "./RecipeList.css";

function RecipeList({ recipes, hasSearched }) {
    if (recipes.length === 0 && hasSearched) {
        return <p className="no-results">Oops, no recipes found. Try a different ingredient!</p>;
    }

    return (
        <div className="recipe-list">
            {recipes.map(meal => (
                <div className="recipe-card" key={meal.id}>
                    <img
                        src={meal.image}
                        alt={meal.title}
                        width="150"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/150";
                        }}
                    />
                    <h3>{meal.title}</h3>
                    <a
                        href={`https://spoonacular.com/recipes/${meal.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}-${meal.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="recipe-button"
                    >
                        View Recipe
                    </a>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;