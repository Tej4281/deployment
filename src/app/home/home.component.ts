import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isShowDiv=true;
  isnotshow=true;
  isshow=true;
  isnotshowing=true;

  isdisplay!: boolean;
  topPosToStartShowing = 100;
  data=[
    {
      'img':'/assets/images/web design.svg',
      'subject':'RESPONSIVE-WEB-DESIGN',
    },
    {
      'img':'/assets/images/Online shopping-amico.svg',
      'subject':'ONLINE-SHOPPING',
    },
    {
      'img':'/assets/images/SEO-rafiki.svg',
      'subject':'SEO',
    },

  ]

  toogleDisplayDiv(){
    this.isShowDiv =!this.isShowDiv
  }

  toogleout(){
    this.isnotshow =!this.isnotshow
  }
  tooglein(){
    this.isshow=!this.isshow
  }

  toogle(){
    this.isnotshowing =!this.isnotshowing
  }


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

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isdisplay = true;
    } else {
      this.isdisplay = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
