import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpRegisComponent } from './emp-regis/emp-regis.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { AddTaskComponent } from './add-task/add-task.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"ul",
    component:EmpLoginComponent
  },
  {
    path:"ur",
    component:EmpRegisComponent
  },
  {
    path:"ts",
    component:AddTaskComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmpLoginComponent,
    EmpRegisComponent,
    MainnavComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
