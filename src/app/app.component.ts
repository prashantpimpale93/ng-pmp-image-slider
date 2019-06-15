import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-pmp-image-slider';

  images: any[] = [
  'https://wallpaper21.com/wp-content/uploads/2017/08/dog-hd-cat-backgrounds-full-hd-animal-wallpaper-wpt7803807.jpg',
  'https://material.angular.io/assets/img/examples/shiba2.jpg',
  'https://material.angular.io/assets/img/examples/shiba1.jpg','https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-HD-1080P-3D-Download.jpg']
}
