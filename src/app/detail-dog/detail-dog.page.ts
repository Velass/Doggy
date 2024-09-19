import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';
import { Dog } from '../model/dog.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private router: Router
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
    this.dogService.deleteDog(this.dog!.id);
    this.router.navigate(['/dog-list']);
  }

}
