import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  _myShoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  get shoppingCart(): Product[] {
    return this._myShoppingCart;
  }

  get total(): number {
    return this._myShoppingCart.reduce((total, product) => product.price + total, 0);
  }

  addProduct(product: Product) {
    this._myShoppingCart.push(product);
    this.myCart.next(this._myShoppingCart);
  }

}
