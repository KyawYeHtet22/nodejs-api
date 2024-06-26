import express from 'express'
import bodyParser from 'body-parser'

import { checkAuth } from '../middlewares/auth.middleware'
import { errorHandler } from '../middlewares/handlers.middleware'

import path from 'path'
import glob from 'glob'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'

import swaggerJson from '../docs/swagger.json'
import redoc from 'redoc-express'

function setupExpress () {
  const app = express()

  app.use(bodyParser.urlencoded({ limit: '10KB', extended: true }))
  app.use(bodyParser.text({ limit: '10KB', extended: true }))
  app.use(bodyParser.json({ limit: '10KB' }))
  app.use(morgan('dev'))
  app.use(compression())
  app.use(
    cors({
      origin: (origin, callback) => {
        return callback(null, true)
      },
      optionsSuccessStatus: 200,
      credentials: true,
      exposedHeaders: '*'
    })
  )

  // shows plain json format
  app.get('/docs/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json(swaggerJson)
  })

  // shows swagger format
  app.get(
    '/docs',
    redoc({
      title: 'API Docs',
      specUrl: '/docs/swagger.json'
    })
  )

  app.use('/server-status', (req, res) => {
    res.status(200).json({
      message: 'Server is up and running!'
    })
  })

  app.use('/api' + '/*', checkAuth)

  const dir = path.join(__dirname, '../routes/*.js')
  const routes = glob.sync(dir.replace(/\\/g, '/'))
  routes.forEach(route => {
    require(route).default(app)
  })

  app.use(errorHandler)
  return app
}

export default setupExpress
