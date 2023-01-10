import * as dotenv from 'dotenv'
dotenv.config()
type Config = {
 API_URL:string
} & NodeJS.ProcessEnv
export const config = process.env as Config