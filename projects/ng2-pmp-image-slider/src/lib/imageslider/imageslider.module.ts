import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { ImagesliderComponent } from './imageslider.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';


@NgModule({
  declarations: [ImagesliderComponent, ImagePreviewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [ImagesliderComponent],
  entryComponents:[ImagePreviewComponent]
})
export class ImagesliderModule { }
