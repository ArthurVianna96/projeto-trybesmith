export interface IProduct {
  id?: number,
  name: string,
  amount: string
}

export interface IOrder {
  id?: number,
  userId: number,
  productsIds: number[]
}

export interface IUser {
  id?: number,
  username: string, 
  classe?: string,
  level?: number,
  password?: string,
}

export interface IToken {
  token: string,
}

export enum StatusCodes {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  Unprocessable = 422,
}
export interface IResponse {
  statusCode: StatusCodes,
}
