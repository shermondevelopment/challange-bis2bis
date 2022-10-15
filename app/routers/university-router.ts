import { Router } from 'express'

/** controllers */
import {
  searchUniversityControllerById,
  deleteUniversityControllerById,
  searchUniversity
} from '../controllers/university-controller'

const universityRouter = Router()

universityRouter.get('/universities/:id', searchUniversityControllerById)
universityRouter.get('/universities', searchUniversity)
universityRouter.delete('/universities/:id', deleteUniversityControllerById)

export default universityRouter
