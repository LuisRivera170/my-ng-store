import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _myShoppingCart: Product[] = [];

  constructor() { }

  get shoppingCart(): Product[] {
    return this._myShoppingCart;
  }

  get total(): number {
    return this._myShoppingCart.reduce((total, product) => product.price + total, 0);
  }

  addProduct(product: Product) {
    this._myShoppingCart.push(product);
  }

}
