import { SendEmailData } from "../mail-adapter";
import { SendEmailAdapter } from "../mail-adapter"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "050361484e0138",
    pass: "4f4239a98beee2"
  }
});

export class NodemailerMailAdapter implements SendEmailAdapter {
  async sendEmail({ subject, body }: SendEmailData) {
    await transport.sendMail({  
      from: 'Equipe feedget <oi@gmail.com>',
      to: 'Leonardo Costa <leonardo_barrosocosta@hotmail.com>',
      subject: subject,
      html: body
    })
  };
}