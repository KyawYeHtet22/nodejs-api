import Blog from '../models/blog'

async function createBlogService ({ title, body, author, date }) {
  try {
    // create Blog
    const blog = new Blog({
      title,
      body,
      author,
      date
    })
    await blog.save()

    return blog
  } catch (error) {
    const err = new Error()
    err.message = error.message
    err.status = error.status
    throw err
  }
}

async function getBlogService ({ id }) {
  try {
    // get Blog
    const blog = await Blog.findById(id)
    if (!blog) {
      const err = new Error()
      err.message = 'Blog not found'
      err.status = 404
      throw err
    }

    return blog
  } catch (error) {
    const err = new Error()
    err.message = error.message
    err.status = error.status
    throw err
  }
}

async function updateBlogService ({ id, title, body, author, date }) {
  try {
    // get Blog
    const blog = await Blog.findById(id)
    if (!blog) {
      const err = new Error()
      err.message = 'Blog not found'
      err.status = 404
      throw err
    }

    // update Blog
    const updatedBlog = await Blog.findOneAndUpdate(
      {
        _id: id
      },
      {
        title,
        body,
        author,
        date
      },
      { upsert: true, new: true }
    )

    return updatedBlog
  } catch (error) {
    const err = new Error()
    err.message = error.message
    err.status = error.status
    throw err
  }
}

async function deleteBlogService ({ id }) {
  try {
    // delete Blog
    const blog = await Blog.findByIdAndDelete(id)
    if (!blog) {
      const err = new Error()
      err.message = 'Blog not found'
      err.status = 404
      throw err
    }

    return { message: 'Blog was deleted successfully' }
  } catch (error) {
    const err = new Error()
    err.message = error.message
    err.status = error.status
    throw err
  }
}

export {
  createBlogService,
  getBlogService,
  updateBlogService,
  deleteBlogService
}
