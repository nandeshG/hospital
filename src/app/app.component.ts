import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital_dashboard';
  textRecieve:string='';
  sentSearch!:string;

  textRecieved(event:string){
    this.textRecieve = event;
  }
}
