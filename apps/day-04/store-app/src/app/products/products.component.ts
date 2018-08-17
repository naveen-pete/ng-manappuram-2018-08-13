import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private logService: LoggerService, private prodService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.prodService.getProducts();
    this.logService.log('Products initialized');
  }
}
