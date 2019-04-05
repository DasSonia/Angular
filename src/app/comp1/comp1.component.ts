import { INCREMENT } from './../actions';
import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux,select } from '@angular-redux/store';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @select('counter') count; // Name in store as parameter as string

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  increment(){
    //this.counter ++;
    //console.log(this.ngRedux.dispatch({type: INCREMENT}));
   this.ngRedux.dispatch({type: INCREMENT});
  }

}
