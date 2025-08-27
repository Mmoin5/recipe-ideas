import "../styles/RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
    if (!recipe) return null;

    return (
        <div className="recipe-details">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className="recipe-info">
                <h2>{recipe.strMeal}</h2>

                <h3>Ingredients</h3>
                <ul>
                    {Array.from({ length: 20 }, (_, i) => {
                        const ingredient = recipe[`strIngredient${i + 1}`];
                        const measure = recipe[`strMeasure${i + 1}`];
                        return (
                            ingredient &&
                            ingredient.trim() && (
                                <li key={i}>
                                    {ingredient} - {measure}
                                </li>
                            )
                        );
                    })}
                </ul>

                <h3>Instructions</h3>
                <p>{recipe.strInstructions}</p>

                {recipe.strYoutube && (
                    <a
                        href={recipe.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                    >
                        ▶ Watch on YouTube
                    </a>
                )}
            </div>
        </div>
    );
};

export default RecipeDetails;
