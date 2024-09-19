import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../service/photoCapacitor/photo.service';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage {
  photo: string | undefined;
  dogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dogService: DogMockerService,
    private navCtrl: NavController,
    private photoService: PhotoService
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

  async selectOrCapturePhoto() {
    try {
      const image = await this.photoService.selectOrTakePhoto();
      if (image && image.webPath) {
        this.dogForm.patchValue({
          photo: image.webPath
        });
      }
    } catch (error) {
      console.error('Erreur lors de la sélection ou capture de la photo', error);
    }
  }
}
