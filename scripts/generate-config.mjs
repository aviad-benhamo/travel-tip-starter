import { config as loadEnv } from 'dotenv'
import { writeFileSync } from 'fs'
import path from 'path'

loadEnv()

const apiKey = process.env.GOOGLE_MAPS_API_KEY

if (!apiKey) {
    console.error('Missing GOOGLE_MAPS_API_KEY. Create a .env file or set the variable before running build:config.')
    process.exit(1)
}

const outputPath = path.resolve('js', 'config.js')
const fileContent = `export const envConfig = {\n    googleMapsApiKey: '${apiKey}'\n}\n`

writeFileSync(outputPath, fileContent, 'utf8')
console.log(`Injected Google Maps key into ${outputPath}`)
