# Angular-Image-Slider

A simple Image Slider module for Angular Application {The library is under development}

* [Online Demo](https://stackblitz.com/edit/angular-image-slider-online-demo)

* Features:

1) Image preview option - (Image will be displayed in the Dialog box)
2) It shows progress bar until the image has not been loaded properly


## Getting started
### Installation

```
npm install ng-pmp-image-slider
```

### Setup
#### Import ImageSliderModule on your ```app.module.ts```:

```
...
import { ImageSliderModule } from 'ng-pmp-image-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
#### Add the component to your AppComponent template:

```
<pmp-image-slider [images]="imageList"></pmp-image-slider>
```

#### Add the property name as `imageList` in AppComponent.ts:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imageList: string[] = ['https://images.com/img1.jpg','https://images.com/img2.jpg'] // etc
}
```
### Options:

```autoslide```:
To enable auto slide images based on flag, defualt value `false`.

```duration```:
Takes number value in milisecond, which is configurable, defualt value `5000 ms (5 seconds)`.


