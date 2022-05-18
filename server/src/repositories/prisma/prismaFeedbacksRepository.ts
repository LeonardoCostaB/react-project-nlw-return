import { FeedbacksCreateData } from '../feedbacksRepository'
import { FeedbacksRepository } from '../feedbacksRepository'
import { prisma } from '../../prisma'

/* 
**** criação do banco de dados 
*/

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenschot}: FeedbacksCreateData) {
    await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenschot: screenschot
      }
    })
  }
}

// export async function PrismaFeedbacksRepository({
//   type,
//   comment,
//   screenschot 
// }: FeedbacksCreateData) {
//   await prisma.feedback.create({
//     data: {
//       type: type,
//       comment: comment,
//       screenschot: screenschot
//     }
//   })
// }