import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AgencyDTO} from '../model/agencies.model';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<AgencyDTO[]> {
    const dataLocal = this.getLocalData();
    if (dataLocal.length) {
      return of(dataLocal);
    }
    return this.http.get<AgencyDTO[]>('/assets/agencies.json').pipe(
      tap(res => localStorage.setItem('agencies', JSON.stringify(res))),
      catchError(err => {
        localStorage.removeItem('agencies');
        return of([]);
      })
    );
  }

  add(data: AgencyDTO, id: number): Observable<{ response: boolean }> {
    let dataLocal = this.getLocalData();
    dataLocal = dataLocal.map(res => {
      if (res.id === id) {
        return {...res, ...data};
      }
      return res;
    });
    localStorage.setItem('agencies', JSON.stringify(dataLocal));
    return of({response: true});
  }

  getLocalData(): AgencyDTO[] {
    const data = localStorage.getItem('agencies');
    return data && JSON.parse(data) || [];
  }
}
