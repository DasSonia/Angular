import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component(
    {
        selector: 'courses',
        //template: '<h2>{{"Title: "+title}}</h2>'
        template: `<h2>{{"Title: "+title}}</h2>
                   <p>{{data}}</p>
                   <ul>
                        <li *ngFor="let course of courses">
                            {{course}}
                        </li>
                   </ul>
                   <p [textContent]="title"></p>
                   <img [src]="imgUrl" />

                   <table>
                   <tr>
                   <td [attr.colspan]="colSpan">Hello</td>
                   <td [attr.colspan]="colSpan">Hello 2</td>
                   </tr>
                   </table>
                   <button class="btn btn-primary" [class.active]="isActive">Save</button>
                   <button (click)="OnSave()" class="btn btn-primary" [style.backgroundColor]="isActive?'green':'red'">Save</button>
                   <input (keyup.enter)="onKeyUp()"/>
                  `
    }
)
export class CoursesComponent{
    title="List of courses";
    data="Data items"
    courses = ["Course 1","Course 2","Course 3"]
    imgUrl = "https://tineye.com/images/widgets/mona.jpg"
    colSpan=2;
    isActive=true
    /*
    constructor(){
        let service = new CoursesService;
        this.courses = service.getCourses();
    }
    */
   constructor(service: CoursesService){    
    this.courses = service.getCourses();
    }
    onKeyUp(){
        console.log("Entered")
    }
    OnSave(){
        console.log("Saved");
        this.isActive = !this.isActive;
    }    

}