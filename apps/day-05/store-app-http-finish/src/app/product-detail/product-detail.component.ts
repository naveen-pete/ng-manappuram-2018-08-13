import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.service.getProduct(this.id).subscribe(
        (product) => {
          this.product = product;
          console.log('Get product successful! Product:', product);
        },
        (error) => {
          console.log('Get product failed! Error:', error);
        }
      );
    });
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.id).subscribe(
        () => {
          console.log('Product deleted successfully!');
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log('Delete product failed! Error:', error);
        }
      );
    }
  }
}
