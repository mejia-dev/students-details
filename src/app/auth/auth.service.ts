import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string|null = null;
  // this is an example of a login process. This would likely be replaced with an auth api
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}