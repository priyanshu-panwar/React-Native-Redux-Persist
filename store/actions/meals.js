import { TOGGLE_FAVOURITE } from "./../constants/mealsConstants";

export const toggleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    mealId: id,
  };
};
