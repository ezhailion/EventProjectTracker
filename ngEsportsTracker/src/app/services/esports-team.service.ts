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
   create(team: EsportsTeam): Observable<EsportsTeam> {
    return this.http.post<EsportsTeam>(this.url,team).pipe(
      catchError((err:any) =>{
        console.error(err);
        return throwError(
          () => new Error('EsportsTeamService.create(): error creating Team: ' + err)
        );
      })
    );
  }

  update(id: number, editTeam: EsportsTeam):  Observable<EsportsTeam> {
    return this.http.put<EsportsTeam>(this.url + "/" + id,editTeam).pipe(
      catchError((err:any) =>{
        console.error(err);
        console.log(editTeam);
        return throwError(
          () => new Error('EsportsTeamService.update(): error Updating Team: ' + err)
        );
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('EsportsTeamService.delete(): error deleting Team: ' + err)
        );
      })
    );
  }


}
