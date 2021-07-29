const express = require("express");
const blogController = require("../controllers/blogController")
const router = express.Router();


router.get("/home", blogController.blog_index);

  router.get("/blogs/create", blogController.blog_create_form);
  
  router.get("/blog/:id", blogController.blog_details);
  
  router.delete("/blog/:id", blogController.blog_delete_post);
  
  
  router.post("/home", blogController.blog_create_post);

  module.exports = router;