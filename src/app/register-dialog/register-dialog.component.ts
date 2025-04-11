import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {
  username = '';
  password = '';
  confirmPassword = '';
  type = '';

  errorMessage: string | null = null;

  constructor(private router: Router, public loginService: LoginService) {}

  register() {
    const user = { nombre: this.username, contrasena: this.password, tipo: this.type };
    this.loginService.register(user).subscribe({
      next: (response: any) => {
        this.errorMessage = null; // Limpia errores anteriores
        console.log({
          username: this.username,
          password: this.password,
          //id: response.id,
          tipo: response.tipo
        });
        // Login automático tras registro
        this.loginService.setLoginCookies(response.tipo, response.id);
        this.router.navigate(['/']);

      },
      error: (err) => {
        if (err.error && err.error.error) {
          this.errorMessage = err.error.error;
        } else {
          this.errorMessage = 'Error desconocido al registrar';
        }
      }
    });
  }
}
