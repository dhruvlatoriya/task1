import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task1';
  // source:any=[];
  constructor(private apihitting:MyserviceService){}
  ngOnInit(): void {
  //  this.PostApiData();
  }

  // PostApiData(){
  //   let json= {
  //     Email: "ajayZ",
  //     password: "12345"
  //   }
  // this.apihitting.PostApi(json).subscribe(result=>{
  //   this.source=result;
  //   console.log(result)
   
  // })
  // }
}
