import "../styles/RecipeModal.css";


const RecipeModal = ({ recipe, onClose }) => {
    if (!recipe) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold"
                >
                    ✖
                </button>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full rounded-lg"
                />
                <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>
                <h3 className="mt-2 font-semibold">Ingredients:</h3>
                <ul className="list-disc list-inside">
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
                <h3 className="mt-4 font-semibold">Instructions:</h3>
                <p className="mt-2 text-justify">{recipe.strInstructions}</p>

                {recipe.strYoutube && (
                    <a
                        href={recipe.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                        ▶ Watch on YouTube
                    </a>
                )}
            </div>
        </div>
    );
};

export default RecipeModal;
