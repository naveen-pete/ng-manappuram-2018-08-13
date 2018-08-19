import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((pMap) => {
      this.id = +pMap.get('id');
      this.product = this.productsService.getProduct(this.id);
    });

    this.route.queryParamMap.subscribe((pMap) => {
      let name = pMap.get('name');
      let city = pMap.get('city');
      console.log('name:', name);
      console.log('city:', city);
    });
  }

  onEdit() {
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
    this.router.navigate(['/products', this.id, 'edit' ], { queryParams: { name: 'arun', city: 'thrissur' }});
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
  }
}
