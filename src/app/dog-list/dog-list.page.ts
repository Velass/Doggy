import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog.model';
import { DogMockerService } from '../service/dogMocker/dog-mocker.service';
import { Share } from '@capacitor/share';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
})
export class DogListPage implements OnInit {

  dogs: Dog[] = [];


  constructor(private dogMockerService: DogMockerService, private router: Router) { }

  ngOnInit() {
    this.dogs = this.dogMockerService.getAll();
  }

  async share(dogid: number, event: Event) {
    event.stopPropagation();
    const dog = this.dogs.find(d => d.id === dogid)
    await Share.share({
      title: `Voici ${dog?.name}`,
      text: `${dog?.name} est un chien de race ${dog?.race} vivant a ${dog?.address} n'hesite pas a nous contacter`,
      url: dog?.photo,
      dialogTitle: 'Partage avec tes doggy',
    });
  }

  goToDetail(dogId: number) {
    this.router.navigate(['/detail-dog', dogId]);
  }

}
