import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { searchMeals } from "./services/mealApi";  // unified search

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setRecipes([]);
    setSearched(true);
    setSelectedRecipe(null);

    try {
      const results = await searchMeals(query);
      if (results.length > 0) setRecipes(results);
      else setError("No recipes found.");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Home
        recipes={recipes}
        loading={loading}
        error={error}
        searched={searched}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    </div>
  );
};

export default App;
