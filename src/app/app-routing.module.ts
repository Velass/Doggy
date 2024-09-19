import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'dog-list',
    loadChildren: () => import('./dog-list/dog-list.module').then( m => m.DogListPageModule)
  },
  {
    path: 'add-dog',
    loadChildren: () => import('./add-dog/add-dog.module').then( m => m.AddDogPageModule)
  },
  {
    path: 'detail-dog/:id',
    loadChildren: () => import('./detail-dog/detail-dog.module').then( m => m.DetailDogPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
