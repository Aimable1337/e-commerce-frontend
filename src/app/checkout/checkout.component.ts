import { Component, OnInit } from '@angular/core';
import {BasketService} from '../basket.service';
import {Product} from '../product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  basket: Product[] = [];
  inTotal = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.currentData.subscribe(data => this.basket = data);
    this.basket.forEach(prod => this.inTotal += prod.productPrice);
  }

  removeFromBasket(id: number): void{

  }
}
