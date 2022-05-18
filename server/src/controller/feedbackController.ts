import { Request, Response  } from 'express'
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailerMailAdapter';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedback } from '../services/submitFeedbackService';

export async function submit(req: Request, res: Response) {
  try {
    const { type, comment, screenschot } = req.body
  
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedback = new SubmitFeedback(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    )

    await submitFeedback.execute({
      type,
      comment,
      screenschot
    })

    return res.status(201).json({ sucess: "feedback enviado com sucesso" })    
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Internal Server Error" })
  }  
}