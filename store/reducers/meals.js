import { TOGGLE_FAVOURITE } from "../constants/mealsConstants";
import { MEALS } from "./../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: MEALS,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
