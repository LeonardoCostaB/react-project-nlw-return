/*
**** métodos e os dados para a criação de um feedback no banco de dados 
*/

export interface FeedbacksCreateData {
  type: string,
  comment: string,
  screenschot?: string
}

export interface FeedbacksRepository {
  create: (data: FeedbacksCreateData) => Promise<void>
}