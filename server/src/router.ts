import { Router } from 'express'
import { submit } from './controller/feedbackController'

export const route = Router()

route.post('/feedback', submit)