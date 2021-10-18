import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img  =>' ,this.img);
    // code
  }

  imageDefault = './assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Image loaded correctly');
    //this.loaded.emit(this.img);
  }

}
