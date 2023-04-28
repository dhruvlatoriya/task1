import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { CookieService } from 'ngx-cookie-service';
import { ApihitingService } from '../apihiting.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  source:any=[];
  
    constructor(private router:Router,  public fb:FormBuilder,public apihitting:ApihitingService, private myservice:MyserviceService ,private cookie:CookieService){
      if(this.cookie.check('name')){
        router.navigate(['/dashboard']);
      }
    }
  
    interval:any;
  // ngOnInit(): void {
  //   this.interval = setInterval(()=>{
  //     if(this.cookie.check('name')){
  //       this.router.navigate(['/home']);
  //     }
  //   },50)
  // }
    // name = new FormControl('');
      profileForm = this.fb.group({
      Emailaddress:['',[Validators.required]],
      password:['',[Validators.required]],
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z1-9\d$@$!%*?&].{8,}')]]
      });
  
    title = 'task';
    visible:boolean=true;
    changetype:boolean=true;
  
    viewpass(){
      this.visible = !this.visible;
      this.changetype= !this.changetype;
    }
    gotohome(){
      this.router.navigate(['dashboard'])
    }

    signIn(){
      let json ={Email:this.profileForm.value.Emailaddress,password:this.profileForm.value.password}
      this.apihitting.PostApi(json).subscribe(result=>{
        console.log(result);
        this.apihitting.apidata=result;
        if(this.apihitting.apidata[0].condition=='True'){
          this.myservice.data=this.profileForm.value?.Emailaddress
          let encryptemail=btoa( JSON.stringify(this.profileForm.value.Emailaddress));
          // sessionStorage.setItem('name',encryptemail);
          this.cookie.set('name',encryptemail,1)
          let encryptpass=btoa(JSON.stringify(this.profileForm.value.password));
          localStorage.setItem('data',btoa(JSON.stringify(result)));
          console.log((atob('data')));
          localStorage.setItem('menu',btoa(JSON.stringify(this.apihitting.apidata[0].menu)));
          // let encryptdata=btoa(JSON.stringify(result));
          // console.log(encryptdata);
          // this.cookie.set('data',encryptdata);
          // sessionStorage.setItem('password',encryptpass);
          this. cookie.set('password',encryptpass,1)
          this.router.navigate(['/dashboard'])
          // this.cookie.set('encryptemail',1) 
          // console.log(this.profileForm.value);
           this.gotohome();
           this.apihitting.islogin= true;
        }
        else{
          this.apihitting.islogin=false;
          this.apihitting.apidata = result;
          console.log(result);
          
        }
      })
      
      
// localStorage.setItem('name','any local')
// sessionStorage.setItem('name',JSON.stringify(this.profileForm.value.Emailaddress))
// sessionStorage.setItem('password',JSON.stringify(this.profileForm.value.password)) 
    }
    ngOnDestroy(): void {
      clearInterval(this.interval);
    }
  }
  
