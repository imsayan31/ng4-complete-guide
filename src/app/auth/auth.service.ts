import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';

interface AuthServiceResponse {
    status: number;
    id: number;
    msg: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) {

    }
    signUp(email: string, password: string) {
        return this.http.post<AuthServiceResponse>('http://localhost/Sober8Jobs/createUser.php', {
            email: email,
            password: password,
            role: 'job_seeker'
        });
    }
}