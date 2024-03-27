import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from 'src/app/service/blog-posts.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  blogsData:any ;
  have_more:boolean=true;
  i:number=2;
  blog_length:number=0;
  text_search: any ;

  have_data:boolean=true;


  constructor(private _BlogPostsService:BlogPostsService){

  }
  ngOnInit(): void {
    this.get_Data();
  }
  get_Data(){
    this._BlogPostsService.getBlogData().subscribe(data=>{
      if(data.length==0||undefined){
        this.have_data=false;
      }
      else{
        this.blogsData=data.slice(0,6);
        this.blog_length=data.length;
      }



    })
  }

  load_more(){
    this._BlogPostsService.getBlogData().subscribe(data=>{
      this.blogsData=data.slice(0,(6*this.i));
      this.i++ ;
      if(6*this.i>this.blog_length){
        this.have_more=false;
      }
    })
  }

  retry(){
    this.get_Data();
  }
}
