import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateTaskComponent,
    EditTaskComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    Navbar1Component,
    MainnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
