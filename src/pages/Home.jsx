import { useEffect, useState } from "react";
import { getMealDetailsById, getRandomMeals } from "../services/mealApi";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";
import "../styles/Home.css";

const Home = ({ recipes, loading, error, searched, selectedRecipe, setSelectedRecipe }) => {
    const [randomMeals, setRandomMeals] = useState([]);

    // Fetch random meals for "Suggestions"
    useEffect(() => {
        const fetchRandom = async () => {
            const meals = await getRandomMeals(9);
            setRandomMeals(meals);
        };
        fetchRandom();
    }, []);

    // When user clicks a recipe card → fetch details & scroll top
    const handleRecipeClick = async (id) => {
        const data = await getMealDetailsById(id);
        setSelectedRecipe(data.meals[0]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Clear search results
    const handleClearSearch = () => {
        setSelectedRecipe(null);
        window.location.reload();
    };

    return (
        <div className="home">
            {/* Loading spinner */}
            {loading && <div className="spinner"></div>}

            {/* Error message for network/API failure */}
            {error && searched && <p className="status error">{error}</p>}

            {/* No results case */}
            {!loading && searched && recipes.length === 0 && !error && (
                <p className="status">No recipes found. Try another search!</p>
            )}

            {/* Selected Recipe Details */}
            {selectedRecipe && (
                <>
                    <h2 className="section-title">Recipe Details</h2>
                    <RecipeDetails recipe={selectedRecipe} />
                </>
            )}

            {/* Search Results */}
            {recipes.length > 0 && (
                <>
                    <div className="search-results-header">
                        <h2 className="section-title">Search Results</h2>
                        <button className="clear-btn" onClick={handleClearSearch}>
                            Clear Search
                        </button>
                    </div>
                    <div className="recipes-grid">
                        {recipes.map((r) => (
                            <RecipeCard key={r.idMeal} recipe={r} onClick={handleRecipeClick} />
                        ))}
                    </div>
                </>
            )}

            {/* Random Suggestions */}
            <h2 className="section-title">Suggestions for You</h2>
            <div className="recipes-grid">
                {randomMeals.map((r) => (
                    <RecipeCard key={r.idMeal} recipe={r} onClick={handleRecipeClick} />
                ))}
            </div>
        </div>
    );
};

export default Home;
