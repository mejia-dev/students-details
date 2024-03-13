import { Injectable } from "@angular/core";
import { Observable, of, tap, delay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string|null = null;
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}