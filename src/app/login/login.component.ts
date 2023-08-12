// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   info:any= {
//     email:'',
//     password:''
//   };

//   constructor(private user: UserService,private router:Router) { }

//   ngOnInit(): void {
//     this.showdata();
//     }

//     onlogin(){ 
//       const info={
    
//         // email:this.info.email,
//         // password:this.info.password
//       };
//     this.user.loginuser(info).subscribe(data =>this.info = data);
//     console.log(this.info);
    
//     this.router.navigate(['showdata'])
//     }


//     showdata(){
//       this.user.getuser().subscribe(data => {this.info=data;
//         console.log(this.info);  
//       });
//     }
// }

