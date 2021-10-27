import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  today: Date = new Date();
  date = new Date(2021, 1, 21);

  showProductDetail: boolean = false;
  productChosen: Product = {
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

  constructor(public storeService: StoreService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe(data => {
        console.log(data);
        this.products = data;
      });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
  }

  onShowProductDetail(idProduct: number) {
    this.productService
      .getProduct(idProduct)
      .subscribe(data => {
        console.log('product', data);
        this.productChosen = data;
        this.toggleProductDetail();
      });
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

}
