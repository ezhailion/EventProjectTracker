import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EsportsTeam } from '../models/esports-team';

@Injectable({
  providedIn: 'root'
})
export class EsportsTeamService {

  private url = environment.baseUrl + 'api/teams';




  constructor(
    private http: HttpClient
  ) { }


  index(): Observable<EsportsTeam[]>{
    return this.http.get<EsportsTeam[]>(this.url);
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('EsportsTeamService.index(): error retrieving teams: ')
      )
    })
  }
}
