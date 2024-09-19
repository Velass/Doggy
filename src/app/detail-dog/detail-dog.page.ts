import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';
import { Dog } from '../model/dog.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../service/photoCapacitor/photo.service';

@Component({
  selector: 'app-detail-dog',
  templateUrl: './detail-dog.page.html',
  styleUrls: ['./detail-dog.page.scss'],
})
export class DetailDogPage implements OnInit {
  dogForm: FormGroup;
  dog: Dog | undefined;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogMockerService,
    private fb: FormBuilder,
    private router: Router,
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

  ngOnInit() {
    const dogId = +this.route.snapshot.paramMap.get('id')!;
    this.dog = this.dogService.getDogById(dogId);
    this.dogForm.patchValue(this.dog!);
  }

  updateDog() {
    if (this.dogForm.valid) {
      this.dogService.updateDog(this.dog!.id, this.dogForm.value);
      this.router.navigate(['/dog-list']);
    }
  }

  deleteDog() {
    if (this.dog) {
      this.dogService.deleteDog(this.dog.id);
      this.router.navigate(['/dog-list']);
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
