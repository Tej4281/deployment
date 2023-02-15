import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.css']
})
export class SEOComponent {


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

  data:any=
  [
    {
    'img':"/assets/images/Grades.svg",
    'heading':"Improve ranking",
    'txt':"Rule top positions in organic results and improve your site authority by optimizing your webpages for major search engines such as Google. ",
  },
  {
    'img':"/assets/images/UX.svg",
    'heading':"Revamp user experience",
    'txt':"Search engines prefer to rank websites with mobile-friendly designs and good integration of images.",
  },
  {
    'img':"/assets/images/Search engines.svg",
    'heading':"Major Search Engines",
    'txt':"96% of Internet users begin their Web search through a major Search Engine (Google, Bing, Yahoo, AOL.",
  },

]
}
