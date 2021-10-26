import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() 
  product: Product = {
    id: -1,
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: ''
    }
  };

  @Output()
  addedProduct = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
