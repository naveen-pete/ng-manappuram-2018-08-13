import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter<Product>();

  showMessage: boolean = false;
  product: Product = new Product();

  onSubmit() {
    this.productCreated.emit(this.product);
    this.product = new Product();

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
