export interface OrderForBackend {
  userId: string;
  client: string;
  product: {
    productId: string;
    qty: number;
  }[];
}
