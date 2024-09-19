import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDogPageRoutingModule } from './detail-dog-routing.module';

import { DetailDogPage } from './detail-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDogPageRoutingModule
  ],
  declarations: [DetailDogPage]
})
export class DetailDogPageModule {}
