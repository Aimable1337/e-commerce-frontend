import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BasketItem} from './BasketItem';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private dataSource = new BehaviorSubject<BasketItem[]>([]);
  currentData = this.dataSource.asObservable();

  constructor() { }

  addProduct(item: BasketItem): void {
    const newBasket = this.dataSource.value;
    const indexOfItem = newBasket.findIndex(element => {
      return item.id === element.id;
    });
    if ( indexOfItem !== -1){
      newBasket[indexOfItem].amount += item.amount;
    } else {
      newBasket.push(item);
    }
    this.dataSource.next(newBasket);
  }

}
