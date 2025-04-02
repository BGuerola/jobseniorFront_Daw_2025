import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {
  username = '';
  password = '';
  confirmPassword = '';
  type = 'candidate';

  constructor(private router: Router) {}

  register() {
    console.log({
      username: this.username,
      password: this.password,
      type: this.type
    });
    this.router.navigate(['emp']);
  }
}
