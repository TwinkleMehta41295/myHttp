import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userData: any;
  private _url='http://server.talkwithca.com/v1/api/writeups';
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getPost();
  }

  // getApiData(){
  //   this._httpClient.get(this._url)
  //   .subscribe(data => this.userData = data);
  // }

  getPost(){
    this._httpClient.get(this._url).subscribe((res:any)=>{
      if(res.success==="true"){
        this.userData = res.queryStatus;
      }else{
        this.userData = [];
      }
      
    },(error)=>{
      this.userData = [];
    });
  }

  createPost(){
    let payload ={
      title : "My First Blog",
      description: " This is my first blog"
    }
    this._httpClient.post(this._url,payload).subscribe((res:any)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    });
  }
  
}
