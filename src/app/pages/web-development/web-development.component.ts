import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent {


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


}

