import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   
import {DataTablesModule} from 'angular-datatables';  
import { UserListComponent } from './user-list/user-list.component';  
import { AddUserComponent } from './add-user/add-user.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent, 
    AddUserComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
