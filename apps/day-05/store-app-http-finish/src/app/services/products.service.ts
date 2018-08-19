import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  private products: Product[];

  constructor(private httpClient: HttpClient) {
    this.products = [];
  }

  getProducts() {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number) {
    // return this.httpClient.get<Product>(this.apiUrl + '/' + id);
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
