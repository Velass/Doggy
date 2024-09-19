import { Injectable } from '@angular/core';
import { Dog } from 'src/app/model/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogMockerService {

  private dogs: Dog[] = [
    {
      id: 1,
      name: "Alvin",
      race: "Malamute ",
      address: "Montpellier",
      description: "testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
      photo: "https://images.dog.ceo/breeds/malamute/n02110063_1034.jpg"
    },
    {
      id: 2,
      name: "Betsy",
      race: "Schipperke",
      address: "Montpellier",
      description: "",
      photo: "https://images.dog.ceo/breeds/schipperke/n02104365_6755.jpg"
    },
    {
      id: 3,
      name: "Chad",
      race: "Yorkshire",
      address: "Montpellier",
      description: "",
      photo: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2328.jpg"
    },
    {
      id: 4,
      name: "Annie",
      race: "rottweiler ",
      address: "Montpellier",
      description: "",
      photo: "https://images.dog.ceo/breeds/rottweiler/n02106550_10966.jpg"
    },
    {
      id: 5,
      name: "Dixon",
      race: "labrador ",
      address: "Montpellier",
      description: "",
      photo: "https://images.dog.ceo/breeds/labrador/n02099712_209.jpg"
    },
  ]

  constructor() { }

  getAll(){
    return [...this.dogs];
  }

  addDog(dog : Dog){
    const newId = this.dogs.length + 1;
    const newDog = {...dog, id: newId}
    this.dogs.push(newDog)
  }

  deleteDog(id: number) {
    this.dogs = this.dogs.filter(dog => dog.id !== id);
    return [...this.dogs]
  }

  getDogById(id: number): Dog |undefined {
    return this.dogs.find(dog => dog.id === id);
  }
  
  updateDog(id: number, updatedDog: Partial<Dog>) {
    const dogIndex = this.dogs.findIndex(dog => dog.id === id);
    if (dogIndex !== -1) {
      this.dogs[dogIndex] = { ...this.dogs[dogIndex], ...updatedDog };
    }
  }
  
}
