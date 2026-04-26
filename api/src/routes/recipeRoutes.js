const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/:target', recipeController.getRecipe);

module.exports = router;