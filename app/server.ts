/** dotenv */
import 'dotenv/config'

/** cors */
import cors from 'cors'

/** connect db */
import connectDb from './config/db'

/** express */
import express, { json } from 'express'

/** scripts */
import searchUniversitiesByCountry from './scripts/register_university'

/** initializing instance of express */
const app = express()
app.use(json())
app.use(cors())

connectDb
  .then(async () => {
    await searchUniversitiesByCountry()
    app.listen(process.env.PORT || 5000, () =>
      console.log(`app running in port ${process.env.PORT} 🚀🚀🚀🚀`)
    )
  })
  .catch(() => console.log('ops!!, database connection failed 😵😵😵'))
