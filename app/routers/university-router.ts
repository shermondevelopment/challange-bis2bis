import { Router } from 'express'

/** controllers */
import {
  searchUniversityControllerById,
  deleteUniversityControllerById
} from '../controllers/university-controller'

const universityRouter = Router()

universityRouter.get('/universities/:id', searchUniversityControllerById)
universityRouter.delete('/universities/:id', deleteUniversityControllerById)

export default universityRouter
