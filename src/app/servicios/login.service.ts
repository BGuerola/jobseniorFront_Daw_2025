import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscrito } from '../models/inscrito.model';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: { nombre: string; contrasena: string }): Observable<Inscrito> {
    return this.http.post<Inscrito>("http://localhost:8080/api/inscritos/login", user);
  }

  register(user: { nombre: string; contrasena: string }): Observable<Inscrito> {
    return this.http.post<Inscrito>("http://localhost:8080/api/inscritos/register", user);
  }

  setLoginCookies(tipo: string, id: number) {
    const expiryDays = 1;
    this.cookies.set("tipo", tipo, 1, '/');
    this.cookies.set("id", id.toString(), 1, '/');
  }

  getTipo(): string {
    return this.cookies.get("tipo");
  }

  getId(): number {
    return Number(this.cookies.get("id"));
  }

  clearLoginCookies() {
    this.cookies.delete("tipo", "/");
    this.cookies.delete("id", "/");
  }
}
