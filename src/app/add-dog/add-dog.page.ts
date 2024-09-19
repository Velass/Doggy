import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage {
  dogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dogService: DogMockerService,
    private navCtrl: NavController
  ) {
    this.dogForm = this.fb.group({
      name: ['', Validators.required],
      race: ['', Validators.required],
      address: ['', Validators.required],
      description: [''],
      photo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.dogForm.valid) {
      const newDog = this.dogForm.value;
      this.dogService.addDog(newDog);
      this.navCtrl.navigateBack('/dog-list'); 
    }
  }
}
