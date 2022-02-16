const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');



// Getting all blogs from database
router.get('/',(req,res) => {
Blog.find().sort({createdAt: -1})
	.then((result) => {
		res.render('index', {title:'All Blogs', blogs: result});
	})
	.catch((err) => {
		console.log(err);
	});
});

router.post('/',(req,res) => {
const blog = new Blog(req.body);

blog.save()
	.then((result) => {
		res.redirect('/blogs');
	})
	.catch((err) => {
		console.log(err.message);
		
	});
});


// Rendering create blog page
router.get('/create', (req, res) => {
res.render('create', {title: 'create new blog'});
});


//Details page
router.get('/:id', (req,res) => {
const id = req.params.id;
Blog.findById(id)
	.then((result) => {
		res.render('details',{title:'Details page', blog: result});
	})
	.catch((err) => {
		res.render('404', {title:'Blog not found'});
	});
});

//Delete Request
router.delete('/:id', (req,res) => {
const id = req.params.id;
Blog.findByIdAndDelete(id)
	.then((result) => {
		res.json({redirect:'/blogs'});
	})
	.catch((err) => {
		console.log(err);
	});
});

module.exports = router;