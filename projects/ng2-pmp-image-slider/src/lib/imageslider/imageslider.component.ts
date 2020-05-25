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
  @Input() autoslide: boolean = false;
  @Input() duration: number = 5000;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loading = true;
    this.snackBarConfiguration = {
      duration: 1200
    }
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
      this.nextImageNotAvailable();
    }
  }

  onImageLoad() {
    this.loading = false;
    // On full image load check for flag and accordingly call next() method manually
    if (this.autoslide) {
      setTimeout(() => {
        this.next();
      }, this.duration)
    }
  }

  prev() {
    this.loading = true;
    if (this.lastIndex - 1 >= 0) {
      this.lastIndex = this.lastIndex - 1;
      this.slideImages = [];
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
    }
    else {
      this.nextImageNotAvailable();
    }
  }

  onImageClick(imageUrl: string) {
    this.dialog.open(ImagePreviewComponent, {
      data: imageUrl
    });
  }

  nextImageNotAvailable() {
    console.warn('Unable to find next image');
    //this.snackBar.open('Sorry! Unable to find an item to display.', '', this.snackBarConfiguration);
    this.loading = false;
  }
}
