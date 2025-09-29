import { Component, OnInit } from '@angular/core';

interface Food {
  image: string
  name: string
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Juices: Food[] = [
    {
      image : '../assets/Images/Juices/chocolate.jpg',
      name : 'chocolate drink',
    },
    {
    image : '../assets/Images/Juices/Creeper.jpg',
    name : 'Creeper Rum cream punch',
    },
    {
      image: '../assets/Images/Juices/Cucumber.jpg',
      name : 'Cucumber Juice',
    },
     {
      image : '../assets/Images/Juices/Pineapple.jpg',
      name : 'Pineapple Juice',
    },
     {
      image : '../assets/Images/Juices/Strawberry.jpg',
      name : 'Strawberry fresca juice',
    },
     {
      image : '../assets/Images/Juices/Watermelon.jpg',
      name : 'Watermelon juice',
    },
  ]

  cakes : Food[] = [
    {
      image : '../assets/Images/Cake/Cheesecakes.jpg',
      name : 'Cheesecake',
    },
    {
      image :'../assets/Images/Cake/chocolate.jpg' ,
      name : 'chocolate cake',
    },
    {
      image :'../assets/Images/Cake/lemon.jpg' ,
      name : 'chocolate cake',
    },
    {
      image :'../assets/Images/Cake/red.jpg' ,
      name : 'red velvet',
    },
    {
      image :'../assets/Images/Cake/strawberry.jpg' ,
      name :'strawberry shortcake',
    },
    {
      image :'../assets/Images/Cake/vanilla.jpeg',
      name : 'vanilla slice',
    },
  ]

  ices: Food[] = [
    {
      image : '../assets/Images/Icream/chocolate.jpg',
      name : 'chocolate ice-cream',
    },
    {
      image :'../assets/Images/Icream/CNC.jpg' ,
      name : 'cookie n cream ice-cream',
    },
    {
      image :'../assets/Images/Icream/Mango.jpeg' ,
      name : 'mango ice-cream',
    },
    {
      image :'../assets/Images/Icream/RNR.jpeg' ,
      name : 'rum n raisin ice-cream',
    },
    {
      image :'../assets/Images/Icream/strawberry.jpg' ,
      name :'strawberry ice-cream',
    },
    {
      image :'../assets/Images/Icream/vanilla.jpg',
      name : 'vanilla ice-cream',
    },
  ]

  mousses: Food[] = [
    {
      image:'../assets/Images/Mousse/Chocolate.jpeg' ,
      name : 'Chocolate mousse',
    },
     {
      image:'../assets/Images/Mousse/lemon.jpg',
      name : 'lemon mousse',
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
