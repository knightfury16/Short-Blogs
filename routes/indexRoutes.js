const express = require('express');
const router = express.Router();


// Rendering index page
router.get('/', (req, res) => {
	res.redirect('/blogs');
});


module.exports = router;