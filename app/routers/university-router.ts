import { Router } from 'express'

/** controllers */
import searchUniversityControllerById from '../controllers/university-controller'

const universityRouter = Router()

universityRouter.get('/universities/:id', searchUniversityControllerById)

export default universityRouter
