import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../service/dogApi/dog-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  imgDog: string = ''

  constructor(private dogService: DogApiService,) { }

  ngOnInit(){
    this.RandomImage()
  }

  RandomImage(){
    this.dogService.getRandomDog().subscribe(res =>
      this.imgDog = res.message
    )
  }

}
