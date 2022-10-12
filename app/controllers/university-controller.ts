import { Request, Response } from 'express'
import universityModel from '../schema/university'

const searchUniversityControllerById = async (req: Request, res: Response) => {
  const { id } = req.params

  const university = await universityModel.findById(id)

  if (!university) {
    return res.status(404).json({ message: 'university does not exist' })
  }

  res.status(200).json(university)
}

export default searchUniversityControllerById
