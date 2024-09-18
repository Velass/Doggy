import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog.model';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
})
export class DogListPage implements OnInit {

  dogs: Dog[] = [];


  constructor(private dogMockerService: DogMockerService) { }

  ngOnInit() {
    this.dogs = this.dogMockerService.getAll();
  }

}
