import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';
import { Dog } from '../model/dog.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../service/photoCapacitor/photo.service';
import { AlertController } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

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
    private photoService: PhotoService,
    private alertController: AlertController
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
    /* ce patch permet de mettre a jour le formulaire dogForm s'il est modifié */
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
      /*  j'utilise haptic pour faire vibrer le téléphone quand un chien serra supprimé */
      const hapticsVibrate = async () => {
        await Haptics.vibrate();
      };
      hapticsVibrate()
      this.router.navigate(['/dog-list']);
    }

  }

  /* Utilisation du service Camera pour prendre ou sélectionner une photo */
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

  /* Avant la suppression une alert demande si l'utilisateur est sur */
  async confirmDelete() {
    const alert = await this.alertController.create(
      {
        header: 'Supprimer ce chien ?',
        subHeader: `${this.dog!.name}`,
        message: 'cette opération ne pourra etre annulée',
        buttons: [
          {
            text: 'Supprimer',
            handler: () => {
              this.deleteDog()
            }
          },
          {
            text: 'Non',
            role: 'cancel'
          }
        ]
      }
    )
    await alert.present();
  }

}
