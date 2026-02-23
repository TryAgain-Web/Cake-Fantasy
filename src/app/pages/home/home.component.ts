import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scr = '../assets/Images/Front.jpg'

  Lemon = '../assets/Images/Cake/lemon.jpg'
  name = 'Lemon Cake'

  Cho = '../assets/Images/Juices/chocolate.jpg'
  name2 = 'Chocolate Drink'

  RNR = '../assets/Images/Icream/RNR.jpeg'
  name3 = 'Ice-Cream'

  lemonM = '../assets/Images/Mousse/lemon.jpg'
  name4 = 'Lemon Mousse'

  Oatcookie = '../assets/Images/Goodies/oatmeal.jpg'
  name5 = 'Oatmeal Cookie'



  constructor() {

    console.log('Home component initialized')
   }

  ngOnInit(): void {
  }

}
