import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';

export interface AuthServiceResponse {
    status: number;
    id: number;
    msg: string;
    url?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new Subject<User>();
    constructor(private http: HttpClient) {

    }
    signUp(email: string, password: string) {
        return this.http.post<AuthServiceResponse>('http://localhost/Sober8Jobs/createUser.php', {
            email: email,
            password: password,
            role: 'job_seeker'
        })
        .pipe(catchError(this.handleError), tap(resp => {
            const expirationTime = new Date(new Date().getTime() + 7200 * 1000);
            const userData = new User(resp.status, resp.id, resp.msg, expirationTime);
            this.user.next(userData);
        }));
    }

    logIn(email: string, password: string) {
        return this.http.post<AuthServiceResponse>('http://localhost/Sober8Jobs/logInUser.php', {
            email: email,
            password: password
        })
        .pipe(catchError(this.handleError));
    }

    private handleError(errMsg: HttpErrorResponse) {
        let errorMessage = 'And unknown error message occured.';
        if (!errMsg.error || !errMsg.error.error) {
            return throwError(errorMessage);
        }
        switch (errMsg.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Email already exists.';
                break;
            default:
                break;
        }
        return throwError(errorMessage);
    }

}
