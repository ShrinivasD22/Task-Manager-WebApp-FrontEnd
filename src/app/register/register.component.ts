import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  title='task-management'
  user: any = {};
  confirmPassword: string = '';

  constructor() { }

  submitForm() {
    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Submit registration form logic goes here
    console.log('Submitted Registration Form:', this.user);
  }
}
