import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl:'./update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  info:any={
    name:'',
    mobile:'',
    email:''
    
   };

  constructor(private user: UserService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.showdata();
   
  }
 
  onUpdateuser() {
    const info={
     name: this.info.name,
     mobile:this.info.mobile,
      email:this.info.email,

    }
    this.user.updateuser('http://localhost:5000/user/update').subscribe(
      (resp)=>{
        console.log(resp)
        
        alert('User updated  succesfully!')
        this.router.navigate(['showdata'])
      }
     );
}
showdata(){
  this.user.getuser().subscribe(data => {this.info=data;
    console.log(this.info);
    
  });
}
}