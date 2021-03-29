import { Injectable } from '@angular/core';
import {Product} from './product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private dataSource = new BehaviorSubject<Product[]>([]);
  currentData = this.dataSource.asObservable();

  constructor() { }

  addProduct(product: Product): void {
    const newBasket = this.dataSource.value;
    newBasket.push(product);
    this.dataSource.next(newBasket);
  }

}
