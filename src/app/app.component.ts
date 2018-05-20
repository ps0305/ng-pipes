import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private var_one:string="angular";
  private var_two:number=100;
  private var_three:Date= new Date();
}
