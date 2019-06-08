import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderComponent } from './imageslider.component';

describe('ImagesliderComponent', () => {
  let component: ImagesliderComponent;
  let fixture: ComponentFixture<ImagesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
