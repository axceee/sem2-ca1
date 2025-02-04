import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT

const app = express()

export default app