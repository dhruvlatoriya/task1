import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApihitingService {

  constructor(private http:HttpClient){ }
apidata:any;
public islogin:any
  PostApi(json:any){
    let url='https://agrodev.pristinefulfil.com/api/User/Login'
    return this.http.post(url,json)
  }
}
