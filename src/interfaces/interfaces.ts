export interface IProduct {
  id?: number,
  name: string,
  amount: string
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface IUserInsert {
  username: string, 
  classe: string,
  level: number,
  password: string,
}

export interface IToken {
  token: string,
}
