const express = require('express')
const showController = require('../controllers/ShowController')
const router = express.Router();

router.post('/', showController.getShow, (req, res) => {
  return res.status(200).send(res.locals.results);
});

module.exports = router;