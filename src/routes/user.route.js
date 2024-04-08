import express from 'express'

import {
  signupValidation,
  signinValidation
} from '../validations/user.validation'

import {
  signup,
  signin
} from '../controllers/user.controller'

const router = express.Router()

router.post('/signup', signupValidation, signup)
router.post('/signin', signinValidation, signin)

export default app => {
  app.use('/users', router)
}
