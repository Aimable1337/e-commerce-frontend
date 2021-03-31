import { Component, OnInit } from '@angular/core';
import {BasketService} from '../basket.service';
import {BasketItem} from '../BasketItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  basket: BasketItem[] = [];
  inTotal = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.currentData.subscribe(data => this.basket = data);
    this.basket.forEach(prod => this.inTotal += prod.price * prod.amount);
  }

  removeFromBasket(id: number): void{

  }
}
