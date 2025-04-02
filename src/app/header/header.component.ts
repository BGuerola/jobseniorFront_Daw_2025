import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showDialog = false;

  constructor(private router: Router) {}

  openDialog(): void {
    this.router.navigate(['login-dialog']);
  }

  openRegisterDialog(): void {
    this.router.navigate(['register-dialog']);
  }

}

