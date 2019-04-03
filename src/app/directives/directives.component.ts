import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  courses = [1,2];
  viewMode = 'map';
  coursess = [
    {id:0,name:'Course 1'},
    {id:1,name:'Course 2'},
    {id:2,name:'Course 3'}
  ]; 
  coursess2;
  isSelected;
  canSave = true;
  task= {
    title:'Review applications',
    assignee:null    
    /*
    assignee:{
      name: 'Uttam'
    }*/
  }
  constructor() { }
  buttonc(){
    this.canSave = !this.canSave;
  }

  onAdd(){
    this.coursess.push({id:4,name:"Course 4"});
  }
  onRemove(course){
    let index = this.coursess.indexOf(course);
    this.coursess.splice(index,1);
  }  
  onRemove2(course){
    let index = this.coursess2.indexOf(course);
    this.coursess2.splice(index,1);
  }  

  onChange(course){    
    course.name = "Updated"
  }    
  onClick(){
    this.isSelected = !this.isSelected;
  }
  
  trackCourse(index,course){
    return course ? course.id: undefined;
  }
  loadCourses(){    
    this.coursess2 = [
      {id:0,name:'Course 1'},
      {id:1,name:'Course 2'},
      {id:2,name:'Course 3'}
    ]; 
  }      

  ngOnInit() {
  }

}
