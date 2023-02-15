import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  private router : Router;

  constructor (router : Router)
  {
    this.router = router;
  }

  // onActive(){
  //   window.scroll(0, 0)
  // }
  ngOnInit() {
    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });

}


}
