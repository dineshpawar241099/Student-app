import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   info:any={
    name:'',
    mobile:'',
    email:'',
    password:'',
   };
  constructor(private user: UserService , private FormsModule:FormsModule,private router:Router){}
  

  ngOnInit(): void {
   this.showdata();

  }
  onSubmit(): void{
    const info={
      name:this.info.name,
      mobile:this.info.mobile,
      email:this.info.email,
      password:this.info.password
    };
    this.user.register(info).subscribe(info => {
      console.log(info);
      alert('User registration successful')
      this.router.navigate(['showdata'])
     
    })
  }


  showdata(){
    this.user.getuser().subscribe(data => {this.info=data;
      console.log(this.info);
      
    });
  }

}
