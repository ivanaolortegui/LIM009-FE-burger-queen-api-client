export interface OrderForBackend {
  userId: string;
  client: string;
  product: {
    _id: string;
    qty: number;
  }[];
  dateEntry : number;
}
