import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDogPage } from './add-dog.page';

describe('AddDogPage', () => {
  let component: AddDogPage;
  let fixture: ComponentFixture<AddDogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
