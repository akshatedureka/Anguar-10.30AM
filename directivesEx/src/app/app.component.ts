import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //num:number = 0;
    

    /*
    obj:any = {
      "uname" : "",
      "upwd" : ""
    };

    login():any{
        if(this.obj.uname == "ashokit" && 
            this.obj.upwd == "ashokit"){
            alert("Login Success");
        }else{
          alert("Login Fail");
        }
    }
    */


   /* 
   arr:any[] = [
      {"p_id":111,"p_name":"p_one","p_cost":10000},
      {"p_id":222,"p_name":"p_two","p_cost":20000},
      {"p_id":333,"p_name":"p_three","p_cost":30000},
      {"p_id":444,"p_name":"p_four","p_cost":40000},
      {"p_id":555,"p_name":"p_five","p_cost":50000}
   ];
   */


   clickMe(arg1:string,arg2:string):any{
     if(arg1 == "ashokit" && arg2 == "ashokit"){
       alert("Login Success");
     }else{
       alert("Login Fail");
     }
   }





}
