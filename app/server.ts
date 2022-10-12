/** dotenv */
import 'dotenv/config'

/** cors */
import cors from 'cors'

/** express */
import express, { json } from 'express'

/** initializing instance of express */
const app = express()
app.use(json())
app.use(cors())

app.listen(process.env.PORT || 5000, () =>
  console.log(`app running in port ${process.env.PORT} 🚀🚀🚀🚀`)
)
