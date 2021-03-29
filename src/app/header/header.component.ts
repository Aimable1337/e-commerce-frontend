import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {AuthService} from '../auth.service';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: Product[] = [];
  basket: Product[] = [];

  constructor(private productService: ProductService,
              private authService: AuthService,
              private basketService: BasketService) { }

  ngOnInit(): void {
    this.getProducts();
    this.basketService.currentData.subscribe( data => this.basket = data);
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  isLoggedIn(): boolean{
    return  this.authService.isLoggedIn();
  }

  logOut(): void{
   this.authService.logout();
  }

}
