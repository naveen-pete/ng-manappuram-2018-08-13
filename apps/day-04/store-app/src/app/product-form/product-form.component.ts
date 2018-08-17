import { Component } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  showMessage: boolean = false;
  product: Product = new Product();

  constructor(private logService: LoggerService, private prodService: ProductsService) {}

  onSubmit() {
    this.logService.log('Product form submitted. Calling addProduct() method on ProductsService.');

    this.prodService.addProduct(this.product);

    this.product = new Product();

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
