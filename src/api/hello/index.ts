import { createRateLimiter } from "../apiRateLimiter"

export default (app) => {
    const limiter = createRateLimiter({
        max: 6,
        windowMs: 15 * 60 * 1000,
        message: 'errors.429',
    })
    app.get('/', limiter, require('./hello').default)
    app.post('/comment', require('./comment').default)
}