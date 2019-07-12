export interface order {
    "userId": string,
    "client": string,
    "product":[{
        "productId" : string,
        "qty" : number,
    }]
  
}
