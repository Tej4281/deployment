import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() { }

  name:any=[
    {
      'img':'/assets/images/ashrf sir2 - Copy.jpeg',
      'name':'Ashraf  Sayyed',
      'position':' Bussiness Development Manager '
    },
    {
      'img':'/assets/images/tejas3.jpeg',
      'name':'Tejas Bandekar',
      'position':' Angular Developer '
    },
    {
      'img':'/assets/images/swara4.jpeg',
      'name':'Swara Khogare',
      'position':' SEO '
    },
    {
      'img':'/assets/images/aditya 3.jpeg',
      'name':'Aditya Sutar',
      'position':' Frontend Developer '
    },
    {
      'img':'/assets/images/shradha 2.jpeg',
      'name':'Shraddha More',
      'position':'Java Developer'
    },
    {
      'img':'/assets/images/mayuri6.jpg',
      'name':'Mayuri Khandekar',
      'position':'Wordpress Developer'
    },
    {
      'img':'/assets/images/gaurang2.jpeg',
      'name':'Gaurang Jagtap',
      'position':'Wordpress Developer'
    },

    {
      'img':'/assets/images/pawan - Copy.jpeg',
      'name':'Pawan Adagale',
      'position':'Wordpress Developer'
    },
  ]

}
