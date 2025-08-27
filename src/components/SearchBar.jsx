import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch, onCategorySearch }) => {
    const [ingredient, setIngredient] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ingredient.trim()) {
            onSearch(ingredient.trim());
            setIngredient("");
            setCategory("");
        }
    };

    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        setCategory(selected);
        if (selected) {
            onCategorySearch(selected);
            setIngredient("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar-form">
            <input
                type="text"
                placeholder="Enter ingredient (e.g., chicken)"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                className="search-bar-input"
            />
            <button type="submit" className="search-bar-button">
                Search
            </button>

            <select
                value={category}
                onChange={handleCategoryChange}
                className="search-bar-select"
            >
                <option value="">Select Category</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
                <option value="Lamb">Lamb</option>
                <option value="Pasta">Pasta</option>
                <option value="Pork">Pork</option>
                <option value="Seafood">Seafood</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Goat">Goat</option>
            </select>
        </form>
    );
};

export default SearchBar;
