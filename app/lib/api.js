// app/lib/api.js

export async function fetchCocktails(searchTerm = 'lemon') {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
  }
}

export async function fetchCocktailById(id) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    
    const data = await response.json();
    return data.drinks?.[0] || null;
  } catch (error) {
    console.error('Error fetching cocktail:', error);
    return null;
  }
}