const postModel = require("../models/post.model")

module.exports.createPostView =(req,res)=>{
  res.render("create-post")
}

module.exports.createPost =async (req,res) => {
  const {media,caption} =req.body
  console.log(req.body);
  const post = await postModel.create({
    media,
    caption
  })

  res.send(post)

} 



