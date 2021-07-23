import { Component, OnInit } from '@angular/core';  
import { UserService } from '../user.service';  
import { User } from '../user';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-student-list',  
  templateUrl: './user-list.component.html',  
  styleUrls: ['./user-list.component.css']  
})  
export class UserListComponent implements OnInit {
  [x: string]: any;  
  
 constructor(private userservice:UserService) { }  
  
 usersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  //user: Observable<User[]>;  
  user : User=new User();  
  deleteMessage=false;  
  userlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.userservice.getUserList().subscribe((data: Observable<User[]>) =>{  
    this.user_id =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteUser(id: number) {  
    this.userservice.deleteUser(id)  
      .subscribe(  
          (        data: any) => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.userservice.getStudentList().subscribe(data =>{  
            this.user =data  
            })  
        },  
          (        error: any) => console.log(error));  
  }  
  
  updateUser(id: number){  
    this.userservice.getUser(id)  
      .subscribe(  
          (        data: any) => {  
          this.userlist=data             
        },  
          (        error: any) => console.log(error));  
  }  
  
  userupdateform=new FormGroup({  
    user_id:new FormControl(),  
    name:new FormControl(),  
    email:new FormControl(),  
    mobileNo:new FormControl() ,
    designation:new FormControl() ,  
    Salary:new FormControl()  ,
    dob:new FormControl() , 
    joiningdate:new FormControl()  
  });  
  
  updateUsr(updusr: any){  
    this.user=new User();   
   this.user.user_id=this.UserId.value;  
   this.user.name=this.Name.value;  
   this.user.email=this.Email.value;  
   this.user.mobileno=this.MobileNo.value;  
   this.user.designation=this.Designation.value;  
   this.user.salary=this.Salary.value;  
   this.user.dob=this.DOB.value;  
   this.user.joiningdate=this.JoiningDate.value;  
  // console.log(this.joiningdate.value);  
     
  
   this.userservice.updateUser(this.user.user_id,this.user).subscribe(  
    data => {       
      this.isupdated=true;  
      this.userservice.getUserList().subscribe((data: any) =>{  
        this.Users =data  
        })  
    },  
       (    error: any) => console.log(error));  
  }  
  
  get Name(){  
    return this.userupdateform.get('name');  
  }  
  
  get Email(){  
    return this.userupdateform.get('email');  
  }  
  
  get MobileNo(){  
    return this.userupdateform.get('mobileno');  
  }  
  get Designation(){  
    return this.userupdateform.get('name');  
  }  
  get Salary(){  
    return this.userupdateform.get('name');  
  }  
  get DOB(){  
    return this.userupdateform.get('name');  
  }  
  
  get UserId(){  
    return this.userupdateform.get('user_id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  