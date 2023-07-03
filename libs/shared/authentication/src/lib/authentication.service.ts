import * as jose from 'jose';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly initialToken: string | null = localStorage.getItem('idToken');

  readonly #idToken: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this.initialToken);

  public readonly idToken$: Observable<string | null> = this.#idToken.asObservable();
  //   public readonly isAuthenticated$: Observable<boolean> = this.#idToken.pipe(map((idToken) => !!idToken));
  public readonly isAuthenticated$: Observable<boolean> = of(true);
  public readonly currentUserId$: Observable<string | null> = this.idToken$.pipe(
    map((idToken) => {
      if (idToken == null) {
        return null;
      }

      const decodedToken: jose.JWTPayload = jose.decodeJwt(idToken);
      if (decodedToken == null || typeof decodedToken === 'string') {
        return null;
      }
      return decodedToken.sub ?? null;
    })
  );
}
