function blogFactory(property) {
  var author = property.author;
  var blogName = property.name;
  var postName = property.posts;

  var blog = {
    getAuthor: _getAuthor,
    editAuthor: _editAuthor,
    // protectAuthor: _protectAuthor,
    getBlogName: _getBlogName,
    editBlogName: _editBlogName,
    createPost: _createPost,
    getPost: _getPost
  };

  return blog;

  function _getAuthor() {
    return author;
  }

  function _editAuthor(newAuth) {
    return author = newAuth;
  }

  function _getBlogName() {
    return blogName;
  }

  function _editBlogName(newBlog) {
    return blogName = newBlog;
  }

  function _createPost(value) {
    var post = PostFactory(config);

    return post;

    function PostFactory() {
      var title = config.title;
      var content = config.content;

      return {
        title: title,
        content: content
      };
    }
  }

  function _getPost() {
    return _createPost();
  }


}
