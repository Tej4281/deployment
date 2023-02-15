import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CRMComponent {

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }
  uname=""
  phone=""
  email=""
  service=""
  message=""
  registerform:any=this.fb.group({
    'uname':this.fb.control('',Validators.required),
    'email':this.fb.control('',Validators.required),
    'phone':this.fb.control('',Validators.required),
    'service':this.fb.control('',Validators.required),
    'message':this.fb.control('',Validators.required)
  })

  data:any=[
    {
      'img':'/assets/images/web multiuser.jpg',
      'text':'Web based multiuser software. Can be accessed through internet .'
    },
    {
      'img':'/assets/images/barcode.webp',
      'text':'Barcode Software'
    },
    {
      'img':'/assets/images/sale purchase.svg',
      'text':'Sales, Purchase, Inventory and Payment Analysis.'
    },
    {
      'img':'/assets/images/graphical anylysis.jpg',
      'text':'Graphical analysis.'
    },
    {
      'img':'/assets/images/notification new.png',
      'text':'Payment alerts and follow ups.'
    },
    {
      'img':'/assets/images/ms office.webp',
      'text':'Supports Bar Code printer and Bar Code scanner.'
    },

  ]
}
