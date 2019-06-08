import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pmp-image-slider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  public slideImages: any[] = [];
  public lastIndex: any = 0;

  @Input() images: any;

  constructor() { }

  ngOnInit() {
    this.slideImages.push(this.images[0]);
    console.log(this.images)
  }

  next() {
    if (this.lastIndex + 1 < this.images.length) {
      this.lastIndex = this.lastIndex + 1;
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
    }
  }

  prev() {
    if (this.lastIndex - 1 >= 0) {
      this.lastIndex = this.lastIndex - 1;
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
    }
  }

}
