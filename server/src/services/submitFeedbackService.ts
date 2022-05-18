import { FeedbacksRepository } from '../repositories/feedbacksRepository'
import { SendEmailAdapter } from '../adapters/mail-adapter'

interface SubmitFeedbackServices {
  type: string, 
  comment: string,
  screenschot?: string,
}

export class SubmitFeedback {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private MailAdapter: SendEmailAdapter
  ) {}

  async execute(req: SubmitFeedbackServices) {  
    const { type, comment, screenschot } = req

    if(!type) {
      throw new Error('Tipo de feedback é obrigatório')
    }

    if(!comment) {
      throw new Error('O comentário do feedback é obrigatório')
    }

    if(screenschot && !screenschot.startsWith('data:image.png;base64')) {
      throw new Error('formato de foto inválido')
    }

    this.feedbacksRepository.create({ 
      type, 
      comment, 
      screenschot
    })

    this.MailAdapter.sendEmail({ 
      subject: 'Assunto Qualquer',
      body: [
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenschot ? `img style="width: 320px" src="${screenschot}" />` : null
      ].join('\n')
    })
  }
}