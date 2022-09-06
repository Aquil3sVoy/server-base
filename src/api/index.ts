import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { createRateLimiter } from './apiRateLimiter'

const app = express()

// Enables CORS
app.use(cors({ origin: true }))

// Default rate limiter
const defaultRateLimiter = createRateLimiter({
    max: 500,
    windowMs: 15 * 60 * 1000,
    message: 'errors.429',
})
app.use(defaultRateLimiter)

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet())

app.use(bodyParser.json({ type: 'application/json' }))
// Configure the Entity routes
const routes = express.Router()

require('./hello').default(routes)

// Add the routes to the /api endpoint
app.use('/api', routes)

export default app
