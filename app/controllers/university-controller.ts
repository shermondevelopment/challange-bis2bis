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

const searchUniversity = async (req: Request, res: Response) => {
  try {
    const { page, offset, country } = req.query
    const perPage = page ? parseInt(page as string) : 1
    const pageOffset = offset ? parseInt(offset as string) : 20

    const universities = await universityModel
      .find({ country: `${country}`.toLocaleLowerCase() })
      .skip(pageOffset * perPage)
      .limit(pageOffset)

    res.status(200).json(universities)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
}

const deleteUniversityControllerById = async (req: Request, res: Response) => {
  const { id } = req.params

  await universityModel.findByIdAndDelete(id)

  res.sendStatus(204)
}

export {
  searchUniversityControllerById,
  deleteUniversityControllerById,
  searchUniversity
}
