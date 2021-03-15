import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private  location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    this.productService.getProduct( +this.route.snapshot.paramMap.get('id') )
      .subscribe( product => this.product = product);
  }

}
