export interface SendEmailData {
  subject: string,
  body: string
}

export interface SendEmailAdapter {
  sendEmail: (data: SendEmailData) => Promise<void>
}