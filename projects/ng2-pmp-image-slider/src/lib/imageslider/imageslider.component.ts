import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'pmp-image-slider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  public slideImages: string[] = [];
  public lastIndex: number = 0;
  public loading: boolean = false;
  public snackBarConfiguration: MatSnackBarConfig;

  @Input() images: string[];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loading = true;
    this.snackBarConfiguration = {
      duration: 1200
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.slideImages.push(this.images[this.lastIndex]);
    this.loading = false;
  }


  next() {
    this.loading = true;
    if (this.lastIndex + 1 < this.images.length) {
      this.lastIndex = this.lastIndex + 1;
      this.slideImages = [];
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      this.snackBar.open('Sorry! Unable to find an item to display.', '', this.snackBarConfiguration);
      this.loading = false;
    }
  }

  onImageLoad() {
    this.loading = false;
  }

  prev() {
    this.loading = true;
    if (this.lastIndex - 1 >= 0) {
      this.lastIndex = this.lastIndex - 1;
      this.slideImages= [];
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      this.snackBar.open('Sorry! Unable to find an item to display.', '', this.snackBarConfiguration);
      this.loading = false;
    }
  }

  onImageClick(imageUrl: string) {
    this.dialog.open(ImagePreviewComponent, {
      data: imageUrl
    });
  }
}
