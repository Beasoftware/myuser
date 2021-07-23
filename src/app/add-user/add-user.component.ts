import { Component, OnInit } from '@angular/core';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  
@Component({  
  selector: 'app-add-user',  
  templateUrl: './add-user.component.html',  
  styleUrls: ['./add-user.component.css']  
})  
export class AddUserComponent implements OnInit {
  userservice: any;  
  
  constructor() { }  
  
  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  usersaveform=new FormGroup({  
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    mobileNo:new FormControl() ,
    deesignation:new FormControl()  ,
    salary:new FormControl() , 
    dob:new FormControl(),
    joiningDate:new FormControl() ,   
  });  
  
  saveUser(saveUser: any){  
    this.user=new User();     
    this.user.name=this.Name.value;  
    this.user.email=this.Email.value;  
    this.user.mobileno=this.MobileNo.value;
    this.user.designation=this.Deesignation.value;    
    this.user.salary=this.Salary.value;  
    this.user.dob=this.DOB.value;  
    this.user.joiningdate=this.JoiningDate.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userservice.createUser(this.user)  
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
    this.user = new User();  
  }  
  
  get Name(){  
    return this.usersaveform.get('name');  
  }  
  
  get Email(){  
    return this.usersaveform.get('email');  
  }  
  
  get MobileNo(){  
    return this.usersaveform.get('mobileno');  
  }  
  get Deesignation(){  
    return this.usersaveform.get('designation');  
  } 
  get Salary(){  
    return this.usersaveform.get('salary');  
  } 
  get DOB(){  
    return this.usersaveform.get('dob');  
  } 
  get JoiningDate(){  
    return this.usersaveform.get('joiningdate');  
  }
           
  addUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  }  
}  