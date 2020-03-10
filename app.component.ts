import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwowayTemp';
  public str:''
  public AcceptData(x){
   console.log(x)
   this.str=x
  }

}

