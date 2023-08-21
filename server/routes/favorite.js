const express = require('express')
const favoriteController = require('../controllers/favoriteController')
const router = express.Router();

router.get('/', favoriteController.getFavorite, (req, res) => {
  return res.status(200).json(res.locals.favorites);
});

router.post('/Add', favoriteController.addFavorite, (req, res) => {
  return res.status(200).json(res.locals.newFav)
});

router.post('/delete', favoriteController.deleteFavorite, (req, res) => {
  return res.status(200).json(res.locals.deleteFav);
})

module.exports = router;