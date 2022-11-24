import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes = [
  {
    path:"",
    component: AdminLoginComponent
  },
  {
    path:"add",
    component: EmployeeAddComponent
  },
  {
    path: "search",
    component: EmployeeSearchComponent
  },
  {
    path: "edit",
    component: EmployeeEditComponent
  },
  {
    path: "delete",
    component: EmployeeDeleteComponent
  },
  {
    path: "view",
    component: EmployeeViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeAddComponent,
    EmployeeSearchComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    EmployeeViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
