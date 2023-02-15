import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // siteKey : string ;
  // theme : any;
  // sitekey: string;

  isSubmit = true;

  siteKey: string;
  theme: any;
  reactiveForm!: FormGroup;
  form: any;
  name: any;
  email: any;
  message: any;
  service: any;
  phone: any;

  submitMessage='';

 
  constructor(public fb:FormBuilder, _reCaptchaV3Service: ReCaptchaV3Service,private http: HttpClient ) {
    this.siteKey='6Lc9WTkkAAAAAJBuuo4tL5D7_XjuW1NpUmjrhUed'
    // this.theme = "Dark";
   }

  ngOnInit(): void {  

    // this.myform = this.firestore.collection('')
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      service: ['', Validators.required],
      phone: ['', Validators.required],
    });

 
    
  }


  
 


  submitForm() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message,
      service: this.service,
      phone : this.phone
    };
    // this.http.post('http://localhost:3306/submit', data).subscribe(response => {
    //   console.log(response);
    this.http.post('http://localhost/api/app.php', data).subscribe(response => {
      console.log(response);
    });

   

  
}
 

}