import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDogPage } from './detail-dog.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDogPageRoutingModule {}
