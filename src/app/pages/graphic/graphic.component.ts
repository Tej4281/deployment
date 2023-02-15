import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent {

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
