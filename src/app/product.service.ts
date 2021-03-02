import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /* TODO: refactor service to use api */
  products = [
    {id: 1, name: `prod1`, category: `cat1`},
    {id: 2, name: `prod2`, category: `cat2`},
    {id: 3, name: `prod3`, category: `cat3`},
    {id: 4, name: `prod4`, category: `cat4`},
    {id: 5, name: `prod5`, category: `cat5`},
    {id: 6, name: `prod6`, category: `cat6`},
  ];

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
