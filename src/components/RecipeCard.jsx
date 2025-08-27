import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe, onClick }) => {
    return (
        <div className="recipe-card" onClick={() => onClick(recipe.idMeal)}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className="recipe-card-body">
                <h3>{recipe.strMeal}</h3>
            </div>
        </div>
    );
};

export default RecipeCard;
