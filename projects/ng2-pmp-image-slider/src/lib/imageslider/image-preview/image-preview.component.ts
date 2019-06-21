import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  public imageUrl: string;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.imageUrl = data;
  }

  ngOnInit() {
  }

}
