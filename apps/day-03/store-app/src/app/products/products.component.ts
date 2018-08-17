import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = [
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

  // product: Product = {
  //   name: 'Taj Mahal Tea',
  //   description: 'Product information provided by the seller on the Website is not exhaustive',
  //   price: 224,
  //   isAvailable: true
  // };
}
