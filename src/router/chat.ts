import { type Request, type Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  try {
    const { body } = req
    res.status(200).json({ body })
  } catch (error: any) {
    res.status(400).json({ error })
  }
})

export default router
