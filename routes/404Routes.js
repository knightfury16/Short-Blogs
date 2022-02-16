const express = require('express');
const router = express.Router();


//404 page
router.use((req, res) => {
	res.status(404).render('404', {title: '404'});
});


module.exports = router;