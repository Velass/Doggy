import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailDogPage } from './detail-dog.page';

describe('DetailDogPage', () => {
  let component: DetailDogPage;
  let fixture: ComponentFixture<DetailDogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
