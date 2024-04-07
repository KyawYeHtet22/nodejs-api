import {
  signupService,
  signinService
} from '../services/user.service'

async function signup (req, res, next) {
  try {
    const { email, password } = req.body

    const user = await signupService({
      email,
      password
    })
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
}

async function signin (req, res, next) {
  try {
    const { email, password } = req.body

    const user = await signinService({
      email,
      password
    })
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
}

export { signup, signin }
