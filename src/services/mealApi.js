const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

// Unified search (tries ingredient first, then meal name)
export const searchMeals = async (query) => {
    try {
        let res = await fetch(`${BASE_URL}filter.php?i=${query}`);

        if (!res.ok) {
            throw new Error("Network error");
        }

        let data = await res.json();

        // fallback to meal name search if no ingredient results
        if (!data.meals) {
            res = await fetch(`${BASE_URL}search.php?s=${query}`);
            if (!res.ok) throw new Error("Network error");
            data = await res.json();
        }

        return data.meals || []; // always return array
    } catch (err) {
        console.error("Error fetching meals:", err);
        throw err; // propagate error up
    }
};

// Search meals by category
export const searchMealsByCategory = async (category) => {
    try {
        const res = await fetch(`${BASE_URL}filter.php?c=${category}`);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        return data.meals || [];
    } catch (err) {
        console.error("Error fetching category meals:", err);
        throw err;
    }
};

// Get full meal details by ID
export const getMealDetailsById = async (id) => {
    const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
    return res.json();
};

// Get random meals
export const getRandomMeals = async (count = 8) => {
    const promises = Array.from({ length: count }, () =>
        fetch(`${BASE_URL}random.php`).then((res) => res.json())
    );
    const results = await Promise.all(promises);
    return results.map((r) => r.meals[0]);
};
