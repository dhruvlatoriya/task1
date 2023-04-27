import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 
  constructor(private http:HttpClient) { }
  data:any;
   istoggle=true;
  // PostApi(json:any){
  //   let url='https://agrodev.pristinefulfil.com/api/User/Login'
  //   return this.http.post(url,json)
  // }

}
