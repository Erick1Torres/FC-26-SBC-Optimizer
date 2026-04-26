const recipeService = require('../services/recipeService');

const getRecipe = (req, res) => {
  const { target } = req.params;
  const recipe = recipeService.getRecipeByTarget(target);

  if (recipe) {
    res.status(200).json(recipe);
  } else {
    res.status(404).json({ message: `No hay recetas para la media ${target}` });
  }
};

module.exports = { getRecipe };