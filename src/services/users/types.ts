export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  balance: number;
  createdCustomers: number[];
  proposals: number[];
};
