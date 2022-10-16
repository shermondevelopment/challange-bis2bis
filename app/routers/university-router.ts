import { Router } from 'express'

/** controllers */
import {
  searchUniversityControllerById,
  deleteUniversityControllerById,
  searchUniversity,
  createUniversity
} from '../controllers/university-controller'

const universityRouter = Router()

universityRouter.post('/universities', createUniversity)
universityRouter.get('/universities/:id', searchUniversityControllerById)
universityRouter.get('/universities', searchUniversity)
universityRouter.delete('/universities/:id', deleteUniversityControllerById)

export default universityRouter
