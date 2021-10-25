import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeMenu: boolean = false;
  counterProducts: number = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => 
      this.counterProducts = products.length
    );
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
