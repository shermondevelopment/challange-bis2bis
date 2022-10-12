/** axios */
import axios from 'axios'

/** list of university */
import countryArray from '../../countryList'

/** universitySchema */
import universityModel, { UniversityInterface } from '../schema/university'

interface UniversityInterfaceResponse extends UniversityInterface {
  'state-province': string
}

const registerUniversityInDatabase = async (
  universityEntityArray: Array<UniversityInterfaceResponse>
) => {
  universityEntityArray.forEach(async (item) => {
    await universityModel.create({
      name: item.name,
      country: item.country,
      domains: item.domains,
      web_pages: item.web_pages,
      state_province: item['state-province'],
      alpha_two_code: item.alpha_two_code
    })
  })
}

const searchUniversitiesByCountry = async () => {
  countryArray.forEach(async (item) => {
    const { data: universityByCountry } = await axios.get(
      `${process.env.API_UNIVERSISTIES}/search?country=${item}`
    )
    await registerUniversityInDatabase(universityByCountry)
  })
}

export default searchUniversitiesByCountry
