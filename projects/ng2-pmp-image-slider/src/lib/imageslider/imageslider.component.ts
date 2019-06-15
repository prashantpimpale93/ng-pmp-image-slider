import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';

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
  public image = new Image;

  @Input() images: string[];

  @ViewChild('image', null) input: ElementRef;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, @Inject(DOCUMENT) document) {
    this.loading = true;
    this.snackBarConfiguration = {
      duration: 1200
    }
  }

  ngAfterViewInit() {
    this.image = this.input.nativeElement;
  }

  ngOnInit() {
    this.slideImages.push(this.images[0]);
    console.log(this.images)
    this.loading = false;
  }


  next() {
    this.loading = true;
    if (this.lastIndex + 1 < this.images.length) {
      this.lastIndex = this.lastIndex + 1;
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
      this.loading = false;
    }
    else {
      this.snackBar.open('Sorry! Unable to find an item to display.', '', this.snackBarConfiguration);
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
      this.loading = false;
    }
  }

  dosomething() {
    console.log('loaded')
  }

  prev() {
    this.loading = true;
    if (this.lastIndex - 1 >= 0) {
      this.lastIndex = this.lastIndex - 1;
      this.slideImages.splice(0, 0, this.images[this.lastIndex]);
      this.loading = false;
    }
    else {
      this.snackBar.open('Sorry! Unable to find an item to display.', '', this.snackBarConfiguration);
      console.log(this.lastIndex, 'Sorry! Unable to find an item to display.');
      this.loading = false;
    }
  }

  onImageClick(imageUrl: string) {
    console.log(imageUrl)
    this.dialog.open(ImagePreviewComponent, {
      data: imageUrl
    });
  }
}
