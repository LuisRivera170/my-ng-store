import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateProductDTO, Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.urlServiceBase}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.urlServiceBase}/products/${id}`);
  }

  create(product: CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(`${environment.urlServiceBase}/products`, product);
  }

}
