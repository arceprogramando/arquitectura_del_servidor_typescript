import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = __dirname
const router = Router()

const cleanFileName = (fileName: string): string | undefined => {
  const file = fileName.split('.').shift()
  return file
}

const files = readdirSync(PATH_ROUTER)

async function loadModules (): Promise<void> {
  for (const fileName of files) {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== 'index' && fileName.endsWith('.ts')) {
      const module = await import(`./${cleanName}`)
      router.use(`/api/${cleanName}`, module.default)
    }
  }
}

loadModules().catch((error) => {
  console.error(error)
})

export default router
