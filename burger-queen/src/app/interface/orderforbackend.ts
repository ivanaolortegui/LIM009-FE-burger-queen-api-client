export interface OrderForBackend {
  userId: string;
  client: string;
  products: {
   product: string;
    qty: number;
  }[];
}
