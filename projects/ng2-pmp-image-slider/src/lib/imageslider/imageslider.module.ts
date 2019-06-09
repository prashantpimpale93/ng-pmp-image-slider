import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { ImagesliderComponent } from './imageslider.component';


@NgModule({
  declarations: [ImagesliderComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ImagesliderComponent]
})
export class ImagesliderModule { }
