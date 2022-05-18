import { SubmitFeedback } from './submitFeedbackService'

/*
*******
  Testando se as funções da minha instância está sendo chamada

  No jest eu posso utilizar o fn para isso.. O fn é como se fosse uma função que não executa nada
  mas serve para espiar, com isso a gente consegue saber se ela foi chamada ou não!!
*******
*/


const createdFeedback = jest.fn()
const createdMail = jest.fn()


/* 
*****
  Instância que estou testando, nesse caso, o teste seria para o caso de uso,
  não para as dependências externas (envio de email e banco de dados)
*****
*/

const submitFeedback = new SubmitFeedback(
  // { create: async () => {} },
  // { sendEmail: async () => {} }
  { create: createdFeedback },
  { sendEmail: createdMail }
)

/*
*****
  describe é um metodo onde eu posso ter vários casos de testes para uma só funcionalidade
*****
*/

describe('submit feedback', () => {
  /*
  *****
    it significado que estou deixando o teste mais legivel, e que no bruto o it should significa "ISSO DEVE" ou "ISSO DEVERIA"   
  */
  
  it('should be able to submit a feedback', async () => {

    /*
      to passando a função que vai ser testada dentro do expect
    */

    /*
      Expect => executa o teste
      resolves => Resolva (promise)
      not => não
      toThrow => dispare erro 
    */
   
   await expect(submitFeedback.execute({
     type: 'BUG',
     comment: "Tudo bugado!!!",
     screenschot: "data:image.png;base64/fnsuifndsohfdsufhnsdfnsd"
   })).resolves.not.toThrow()

   /*
      Expect => executa o teste
      toHaveBennCalled => ouve se a função foi chamada, nesse caso pq utilizei o jest.fn()
   */

   expect(createdFeedback).toHaveBeenCalled()
   expect(createdMail).toHaveBeenCalled()
  })

  it('should not be able to submit feedback without type', async () => {
    /*
    *****
      Esse test tem como finalidade de me mostrar o erro, nesse caso, nenhum feedback pode ser 
      enviado sem o tipo do feedback
    *****
    */

    expect(submitFeedback.execute({
      type: '',
      comment: 'Tudo bugado',
      screenschot: 'data:image.png;base64/fnsuifndsohfdsufhnsdfnsd'
    })).rejects.toThrow()

    /*
    *****
      Rejects => rejeitar 
      toThrow => lançar o erro
    *****
    */
  })

  it('should not be able to submit feedback without comment', async () => {
    /*
    *****
      Esse test tem como finalidade de me mostrar o erro, nesse caso, nenhum feedback pode ser 
      enviado sem o comentário do feedback
    *****
    */

    expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenschot: 'data:image.png;base64/fnsuifndsohfdsufhnsdfnsd'
    })).rejects.toThrow()

    /*
    *****
      Rejects => rejeitar 
      toThrow => lançar o erro
    *****
    */
  })
})