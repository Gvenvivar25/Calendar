import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {catchError, tap} from 'rxjs/operators';
import {UrlConstants} from '../../shared/url-constants';
import {User} from './user.model';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient) {}

    getUser(id: number): Observable<User> {
        const url = `${UrlConstants.URL_USER}/${id}`;
        return this.httpClient.get<User>(url).pipe(
            catchError(err => {console.log(err, 'Отсутсвуют данные в БД');
                               return of(null); })
        );
    }

    getUsers(): Observable<User []> {
        return this.httpClient.get<User[]>(UrlConstants.URL_USER).pipe(
            catchError(err => {console.log(err, 'Отсутсвуют данные в БД');
                               return of(null); })
        );

    }

    saveUser(user): Observable<User> {
        return this.httpClient.post<User>(UrlConstants.URL_USER, user).pipe(
            tap((res: User) => console.log(`added user id=${res.id}`)),
            catchError(err => {console.log(err, 'Не удалось добавить пользователя');
                               return of(null); })
        );
    }

    updateUser(id: number, user): Observable<any> {
        const url = `${UrlConstants.URL_USER}/${id}`;
        user.id = id;
        return this.httpClient.put(url, user, httpOptions).pipe(
            tap(() => {return console.log(`updated user id=${id}`);
            }),
            catchError(err => {console.log(err, 'Не удалось обновить пользователя');
                               return of(null); })
        );
    }

    deleteUser(id: number) {
        const url = `${UrlConstants.URL_USER}/${id}`;
        return this.httpClient.delete(url, httpOptions).pipe(
            tap(() => console.log(`deleted user id=${id}`)),
            catchError(err => {console.log(err, 'Не удалось удалить пользователя');
                               return of(null); })
        );
    }
}