import { Router } from 'express'
import { auth } from './auth.controller'

const router = Router()

router.post('/register_client', auth.registerClient)

router.post('/register_seller', auth.registerSeller)

router.post('/login', auth.login)

router.post('/logout', auth.logout)

router.get('/protected', auth.protected)

export default router