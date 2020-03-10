import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twowaybinding';
  name:string
  public MarvellousEvent(inp:string){
      this.name=inp 
      console.log(this.name)
      return this.name
   }

}
