export type ProductArg = {
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  categoryId: number;
};

export type CategoryArg = {
  name: string;
  categoryId?: number;
};
