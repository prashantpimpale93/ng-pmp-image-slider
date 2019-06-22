import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  public imageUrl: string;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: string,
    @Optional() public dialogRef: MatDialogRef<ImagePreviewComponent>) {
    this.imageUrl = data;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
