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

const createUniversity = async (req: Request, res: Response) => {
  try {
    const {
      country,
      name,
      state_province,
      alpha_two_code,
      web_pages,
      domains
    } = req.body
    const findUniversity = await universityModel.findOne({
      $and: [
        { country: country },
        { $or: [{ name: name }, { state_province: state_province }] }
      ]
    })

    if (findUniversity) {
      return res.status(400).json({ error: 'university already exists!' })
    }

    const universityCreated = await universityModel.create({
      country,
      name,
      state_province,
      alpha_two_code,
      web_pages,
      domains
    })

    res.status(201).json(universityCreated)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
}

const updateUniversity = async (req: Request, res: Response) => {
  try {
    const universityBody = req.body
    const { id } = req.params

    const findUniversity = await universityModel.findById(id)

    if (!findUniversity) {
      return res.status(404).json({ error: 'university does not exist' })
    }

    await universityModel.update({ ...universityBody })

    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
}

const deleteUniversityControllerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await universityModel.findByIdAndDelete(id)

    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
}

export {
  searchUniversityControllerById,
  deleteUniversityControllerById,
  searchUniversity,
  createUniversity,
  updateUniversity
}
