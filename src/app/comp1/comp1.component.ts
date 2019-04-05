import { INCREMENT } from './../actions';
import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  counter = 0
  constructor(private ngRedux: NgRedux<IAppState>) {
    // We have to release the memory.
    // We have to unsubscribe the ngRedux
    var subscription = ngRedux.subscribe(()=>{
      console.log(ngRedux.getState());
      var store = ngRedux.getState();
      this.counter = store.counter;
    })
   }

  ngOnInit() {
  }
  increment(){
    //this.counter ++;
    //console.log(this.ngRedux.dispatch({type: INCREMENT}));
   this.ngRedux.dispatch({type: INCREMENT});
  }

}
