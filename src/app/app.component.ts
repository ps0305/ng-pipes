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
  private var_four:Array<any>=[10,20,30,40,50];
  private var_five:number=0.9;
  private var_six:number=4.404;
  private var_seven:any={p_id:111,p_name:'p_one',p_cost:10000};
}
