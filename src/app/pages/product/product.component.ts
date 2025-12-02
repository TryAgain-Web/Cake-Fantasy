import { Component, OnInit } from '@angular/core';

interface Food {
  image: string
  name: string
  btn: string
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
      btn : 'Add to Cart',
    },
    {
    image : '../assets/Images/Juices/Creeper.jpg',
    name : 'Creeper Rum cream punch',
    btn : 'Add to Cart',
    },
    {
      image: '../assets/Images/Juices/Cucumber.jpg',
      name : 'Cucumber Juice',
      btn : 'Add to Cart',
    },
     {
      image : '../assets/Images/Juices/Pineapple.jpg',
      name : 'Pineapple Juice',
      btn : 'Add to Cart',
    },
     {
      image : '../assets/Images/Juices/Strawberry.jpg',
      name : 'Strawberry fresca juice',
      btn : 'Add to Cart',
    },
     {
      image : '../assets/Images/Juices/Watermelon.jpg',
      name : 'Watermelon juice',
      btn : 'Add to Cart',
    },
  ]

  cakes : Food[] = [
    {
      image : '../assets/Images/Cake/Cheesecakes.jpg',
      name : 'Cheesecake',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Cake/chocolate.jpg' ,
      name : 'chocolate cake',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Cake/lemon.jpg' ,
      name : 'chocolate cake',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Cake/red.jpg' ,
      name : 'red velvet',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Cake/strawberry.jpg' ,
      name :'strawberry shortcake',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Cake/vanilla.jpeg',
      name : 'vanilla slice',
      btn : 'Add to Cart',
    },
  ]

  ices: Food[] = [
    {
      image : '../assets/Images/Icream/chocolate.jpg',
      name : 'chocolate ice-cream',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Icream/CNC.jpg' ,
      name : 'cookie n cream ice-cream',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Icream/Mango.jpeg' ,
      name : 'mango ice-cream',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Icream/RNR.jpeg' ,
      name : 'rum n raisin ice-cream',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Icream/strawberry.jpg' ,
      name :'strawberry ice-cream',
      btn : 'Add to Cart',
    },
    {
      image :'../assets/Images/Icream/vanilla.jpg',
      name : 'vanilla ice-cream',
      btn : 'Add to Cart',
    },
  ]

  mousses: Food[] = [
    {
      image:'../assets/Images/Mousse/Chocolate.jpeg' ,
      name : 'Chocolate mousse',
      btn : 'Add to Cart',
    },
     {
      image:'../assets/Images/Mousse/lemon.jpg',
      name : 'lemon mousse',
      btn : 'Add to Cart',
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
