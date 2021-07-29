const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => {
      res.status(404).render("404");
    });
};

const blog_create_form = (req, res) => {
  res.render("create");
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => {
      res.redirect("/home");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete_post = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ id: id });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_form,
  blog_create_post,
  blog_delete_post,
};
