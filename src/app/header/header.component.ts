import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: Product[] = [];
  basket: Product[] = [];

  constructor(private productService: ProductService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getProducts();
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
