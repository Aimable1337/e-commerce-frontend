import {Product} from './product';

export class BasketItem{
  id: number;
  name: string;
  amount: number;
  price: number;

  constructor(product: Product, amount: number) {
    this.id = product.productId;
    this.name = product.productName;
    this.price = product.productPrice;
    this.amount = amount;
  }
}
