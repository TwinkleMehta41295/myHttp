import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


// This HttpClient is a service of HttpModulen
// This HttpClient is used to execute http request {GET, POST, DELETE, PUT, PATC H,OPTIONS}
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styles: []
})
export class CreateBlogComponent implements OnInit {
  public userData: any;
  private _url: 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getPost();
  }

  // getApiData(){
  //   this._httpClient.get(this._url)
  //   .subscribe(data => this.userData = data);
  // }

  getPost(){
    this._httpClient.get(this._url).subscribe(
      (resp)=>{
        this.userData= resp;
        console.log(this.userData);
      },
      (error)=>{
        this.userData=[];
      }
    );
  }
}
