import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  log(x){
    console.log(x);
  }
  submit(f){
    console.log(f);
    console.log(f.value);
  }
  ngOnInit() {
  }

}
