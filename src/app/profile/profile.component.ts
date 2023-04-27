import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  img: any='sign_in.png';

  // @ViewChild('changeimg') change :any 
    //  color = 'red';




  // PickPic(){
  //   let a = document.createElement('input')
  //   a.setAttribute('type', 'file')
  //   a.click() 
  
  // }


  onselectFile(e: any){
    console.log(e.target.files);
    
    this.img = e.target.files[0].name;
    console.log(this.img); 
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) => {
        this.img =event.target.result
        console.log(this.img);
         
      }
    }
  }
  deleteimage(){
    this.img='downloaded.png';
  }

}