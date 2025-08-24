import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    location: "Test City",
    temperature: 22,
    condition: "Sunny"
  });
});

export default router;
