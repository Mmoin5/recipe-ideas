import SearchBar from "./SearchBar";
import "../styles/Header.css";

const Header = ({ onSearch, onCategorySearch }) => {
    return (
        <header>
            <h1>Recipe Ideas</h1>
            {/* SearchBar handles both ingredient & category */}
            <SearchBar onSearch={onSearch} onCategorySearch={onCategorySearch} />
        </header>
    );
};

export default Header;
