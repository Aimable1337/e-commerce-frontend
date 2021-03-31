import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {BasketService} from '../basket.service';
import {BasketItem} from '../BasketItem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  basket: BasketItem[];
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private  location: Location,
              private basketService: BasketService,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      amount: [``, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProduct();
    this.basketService.currentData.subscribe(data => this.basket = data );
  }

  getProduct(): void{
    this.productService.getProduct( +this.route.snapshot.paramMap.get('id') )
      .subscribe( product => this.product = product);
  }

  addProduct(): void{
    const val = this.form.value;
    const item: BasketItem = new BasketItem(this.product, val.amount);
    this.basketService.addProduct(item);
  }

}
