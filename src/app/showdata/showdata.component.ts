import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-showdata',
  templateUrl:'./showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
   
   info:any;
  
  constructor(private user: UserService,private http:HttpClient,private formmodule:FormsModule) { }

  ngOnInit(): void {
    this.showdata();
}


onDeleteuser(id:string) {
  this.http.delete('http://localhost:5000/user/delete?id='+id+'').subscribe(
    (resp)=>{
      console.log(resp)
      
      alert('Are you sure you want to delete this user?');
      this.showdata();
     
    }  
);    
}
showdata(){
  this.user.getuser().subscribe(data => {this.info=data;
    console.log(this.info);
    
  });
}

}
