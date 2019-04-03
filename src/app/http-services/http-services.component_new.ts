import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.delete.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit {
  posts:any[];
  

  constructor(private service:PostService) {
   }

  ngOnInit() {
    // Promisible or Obervable class , Asynchronous and load time needed
    this.service.getPosts()
    .subscribe( (response)=>{
      //console.log(response.json())
      this.posts = response.json()
    },error=>{
      alert('An unexpected error had occured.')
      console.log(error)
    })
  }
  createPost(input:HTMLInputElement){
    let post = {
      title: input.value
    };
    input.value = '';
    this.service.createPost(post)
    .subscribe(response=>{
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
      //console.log(response.json());      
    },error=>{
      alert('An unexpected error had occured.')
      console.log(error)
    })
  }
  updatePost(post){
    // patch for partial update
    // I want to change isRead to true
    this.service.updatePosts(post)
    .subscribe(response=>{
      console.log(response.json());      
    },error=>{
      alert('An unexpected error had occured.')
      console.log(error)
    })
    //this.http.put(this.url,post)
  }

  deletePost(post){
    this.service.deletePost(post.id)
    //this.service.deletePost(1)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1)
    },(error:Response)=>{
      if(error.status===404)
      {
        alert('This post has already been deleted')
      }
      else{
        alert('An unexpected error had occured.')
        console.log(error)
      }
    });
  }  

}
