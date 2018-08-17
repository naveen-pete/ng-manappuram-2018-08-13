import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      name: 'Taj Mahal Tea',
      description: 'Product information provided by the seller on the Website is not exhaustive',
      price: 224,
      isAvailable: true
    },
    {
      name: 'Inalsa Oscar Steam Iron',
      description: 'Wear crisp and crease-free clothes to work as you bring home the Inalsa Oscar steam iron',
      price: 575,
      isAvailable: false
    },
    {
      name: 'Skullcandy Inkd Headset with mic',
      description: 'Good for phone calls, okayish for music',
      price: 900,
      isAvailable: true
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    console.log('ProductsService.getProducts() called.');
    return this.products;
  }

  addProduct(product: Product) {
    console.log('ProductsService.addProduct() called. product:', product);
    this.products.unshift(product);
    console.log('Product added to the array of products, products:', this.products);
  }
}
