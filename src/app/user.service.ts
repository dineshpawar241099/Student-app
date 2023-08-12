import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  baseURL:string="http://localhost:5000";

  constructor( private http:HttpClient) {}
 
 
 public getuser()  :Observable<any> {
    let baseURL:string=`${this.baseURL}/user/ShowData`;
    return this.http.get<any>(baseURL);
    
  }

  public register(info:any) :Observable<any> {
    let baseURL:string=`${this.baseURL}/user/register`;
    return this.http.post<any>(baseURL, info);
  }
 

 public updateuser( info:any): Observable<any>{
    let baseURL:string= `${this.baseURL}/user/update`;
    return this.http.put<any>(baseURL,info);
  }
  
 

 public Deleteuser(_id:string): Observable<{}>{
  let baseURL:string= `${this.baseURL}/user/delete/${_id}`;
  return this.http.delete<{}>(baseURL);
    
  }
  
 public loginuser(info:any):Observable<any>{
    let baseURL:string= `${this.baseURL}/user/login`;
    return this.http.post(baseURL,info)
  }
}

