  import { Component, Output, EventEmitter } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css']
  })
  export class LoginDialogComponent {
    username = '';
    password = '';
    type = 'candidate';

    constructor(private router: Router) {}
    close(): void {
      window.close(); // Cierra la ventana independiente
    }

    login(): void {
      console.log({
        username: this.username,
        password: this.password,
        type: this.type
      });
      this.router.navigate(['cand']);
    }
  }
