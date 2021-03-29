import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  basket: Product[];

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private  location: Location,
              private basketService: BasketService) { }

  ngOnInit(): void {
    this.getProduct();
    this.basketService.currentData.subscribe(data => this.basket = data );
  }

  getProduct(): void{
    this.productService.getProduct( +this.route.snapshot.paramMap.get('id') )
      .subscribe( product => this.product = product);
  }

  addProduct(): void{
    this.basketService.addProduct(this.product);
  }

}
