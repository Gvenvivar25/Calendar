import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Classroom, TypeOfClassroom} from './classroom.model';
import {catchError, tap} from 'rxjs/operators';
import {UrlConstants} from '../../shared/url-constants';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class ClassroomService {

    constructor(private httpClient: HttpClient) {}

    getClassroom(id: number): Observable<Classroom> {
        const url = `${UrlConstants.URL_CLASSROOM}/${id}`;
        return this.httpClient.get<Classroom>(url).pipe(
            catchError(err => {console.log(err, 'Отсутсвуют данные в БД');
                               return of(null); })
            );
    }

    getClassrooms(): Observable<Classroom []> {
        return this.httpClient.get<Classroom[]>(UrlConstants.URL_CLASSROOM).pipe(
            catchError(err => {console.log(err, 'Отсутсвуют данные в БД');
                               return of(null); })
        );

    }

    saveClassroom(classroom): Observable<Classroom> {
        return this.httpClient.post<Classroom>(UrlConstants.URL_CLASSROOM, classroom).pipe(
            tap((res: Classroom) => console.log(`added classroom id=${res.id}`)),
            catchError(err => {console.log(err, 'Не удалось добавить аудиторию');
                               return of(null); })
        );
    }

    updateClassroom(id: number, classroom): Observable<any> {
        const url = `${UrlConstants.URL_CLASSROOM}/${id}`;
        classroom.id = id;
        return this.httpClient.put(url, classroom, httpOptions).pipe(
            tap(() => {return console.log(`updated classroom id=${id}`);
            }),
            catchError(err => {console.log(err, 'Не удалось обновить аудиторию');
                               return of(null); })
        );
    }

    deleteClassroom(id: number) {
        const url = `${UrlConstants.URL_CLASSROOM}/${id}`;
        return this.httpClient.delete(url, httpOptions).pipe(
            tap(() => console.log(`deleted classroom id=${id}`)),
            catchError(err => {console.log(err, 'Не удалось удалить аудиторию');
                               return of(null); })
        );
    }

    getTypesOfClassroom() {
        return this.httpClient.get<TypeOfClassroom []>(UrlConstants.URL_TYPE_OF_CLASSROOM);
    }

}