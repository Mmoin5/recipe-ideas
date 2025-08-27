### Recipe Ideas

A simple and responsive Recipe Finder Web App built with React.
It helps users search for recipes by ingredient or category, explore random recipe suggestions, and view detailed recipe instructions.

### 🚀 Live Demo

[Recipe Finder App] (https://recipe-finder-mohammed.netlify.app)

### ✨ Features

🔍 Search by Ingredient (e.g., chicken, beef, rice).

📂 Search by Category (e.g., Seafood, Dessert, Vegan).

📖 Recipe Details with ingredients & instructions.

🎲 Random Recipe Suggestions on homepage.

🔄 Loading Spinner during API calls.

❌ Clear Search Button to reset results.

📱 Responsive Design (works on desktop, tablet, mobile).

🛠 Error Handling (no results, network issues).

### 🛠️ Tech Stack

React (functional components, hooks)

CSS (responsive design, custom styles)

TheMealDB API for recipes

### 📂 Project Structure
src/

 ├── components/
 
 │    ├── Header.jsx
 
 │    ├── SearchBar.jsx
 
 │    ├── RecipeCard.jsx
 
 │    ├── RecipeDetails.jsx
 
 │    └── RecipeModal.jsx
 
 │
 
 ├── pages/
 
 │    └── Home.jsx
 
 │
 
 ├── services/
 
 │    └── mealApi.js
 
 │
 
 ├── styles/
 
 │    ├── Header.css
 
 │    ├── SearchBar.css
 
 │    ├── RecipeCard.css
 
 │    ├── RecipeDetails.css
 
 │    ├── RecipeModal.css
 
 │    └── Home.css
 
 │
 
 ├── App.jsx
 
 └── index.js

### ⚙️ Setup & Installation

1. Clone the repo:
   
   git clone https://github.com/your-username/recipe-ideas.git

   cd recipe-ideas

2. Install dependencies:

    npm install

3. Start development server:

   npm start

4. Open in browser:

   http://localhost:5173

### 📡 API Reference

Using TheMealDB API (no auth required).

Search by Ingredient

https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}

Search by Category

https://www.themealdb.com/api/json/v1/1/filter.php?c={category}

Search by Meal Name

https://www.themealdb.com/api/json/v1/1/search.php?s={meal}

Get Meal Details by ID

https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}

Random Meal

https://www.themealdb.com/api/json/v1/1/random.php

### 🧑‍💻 Author

Mohammed Moin Pasha

📧 mmoinpasha500@gmail.com
