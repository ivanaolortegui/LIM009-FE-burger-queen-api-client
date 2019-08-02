export interface orderResponse{
    _id: string,
    userId: string,
    client: string,
    products: 
        { qty: number,
            product: { _id: string,
            name: string,
            price: string,
            image: string,
            type: string,
            dateEntry: string,      
            }[]
        }
    status: string,
    dateEntry: number,
    dateProcessed:string
}