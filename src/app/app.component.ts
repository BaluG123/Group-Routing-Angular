import { Component } from '@angular/core';
import { dataType } from 'user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grouprout';
  getData(){
    const data:dataType={
    name:'balu',
    age:20,
    address:"40 duradundi"
  }
  return data
  
}
}
