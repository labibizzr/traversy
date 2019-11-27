'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index({ view }){

    // const posts =[
    //   { title : 'Post One', body : 'This is post one' },
    //   { title : 'Post Two', body : 'This is post two' },
    //   { title : 'Post Three', body : 'This is post three' }
    // ]

   const posts = await Post.all()

    console.dir(posts)
    return view.render('posts.index', {
      title : 'Latest Posts',
      ayaya : 'ayaya',
      posts : posts.toJSON()
    })
  }

  async details({params, view}){
    const post = await Post.find(params.id)

    return view.render('posts.details', {
      post: post
    })
  }

  async add({ view }){

    return view.render('posts.add')
  }
}


module.exports = PostController
