import {
  createBlogService,
  getBlogService,
  updateBlogService,
  deleteBlogService
} from '../services/blog.service'

async function createBlog (req, res, next) {
  try {
    const { title, body, author, date } = req.body

    const blog = await createBlogService({
      title,
      body,
      author,
      date
    })
    res.status(200).send(blog)
  } catch (error) {
    next(error)
  }
}

async function getBlog (req, res, next) {
  try {
    const { id } = req.params

    const blog = await getBlogService({
      id
    })
    res.status(200).send(blog)
  } catch (error) {
    next(error)
  }
}

async function updateBlog (req, res, next) {
  try {
    const { id } = req.params
    const { title, body, author, date } = req.body

    const blog = await updateBlogService({
      id,
      title,
      body,
      author,
      date
    })
    res.status(200).send(blog)
  } catch (error) {
    next(error)
  }
}

async function deleteBlog (req, res, next) {
  try {
    const { id } = req.params

    const blog = await deleteBlogService({
      id
    })
    res.status(200).send(blog)
  } catch (error) {
    next(error)
  }
}

export { createBlog, getBlog, updateBlog, deleteBlog }
