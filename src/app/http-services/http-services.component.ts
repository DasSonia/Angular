import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit {
  posts:any[];
  //private url='https://jsonplaceholder.typicode.com/posts';
  private url='http://localhost:8080/api/profile/';

  constructor(private http:Http) {
    // Promisible or Obervable class , Asynchronous and load time needed
    http.get(this.url)
    .subscribe( (response)=>{
      console.log(response.json())
      this.posts = response.json()
    })
   }

  ngOnInit() {
  }
  createPost(input:HTMLInputElement){
    let post = {
      title: input.value
    };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response=>{
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
      //console.log(response.json());      
    })
  }
  updatePost(post){
    // patch for partial update
    // I want to change isRead to true
    this.http.patch(this.url + '/'+ post.id,JSON.stringify({isRead: true  }))
    .subscribe(response=>{
      console.log(response.json());      
    })
    //this.http.put(this.url,post)
  }

  deletePost(post){
    this.http.delete(this.url+'/'+post.id)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1)
    });
  }  

}
