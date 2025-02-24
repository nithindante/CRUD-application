import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Emp } from './emp';
@Injectable({
  providedIn: 'root'
})
export class EmpdetailsService {

  constructor(private http : HttpClient) { }

  getDetails(): Observable<Emp[]> {
    return this.http.get<Emp[]>('https://67460ffe512ddbd807fab7d9.mockapi.io/ap/emp/Employees')
  }

  enterDetails(content: any): Observable<Emp[]>{
   return this.http.post<Emp[]>('https://67460ffe512ddbd807fab7d9.mockapi.io/ap/emp/Employees',content)
  }

  deleteDetails(id: number): Observable<Emp[]>{
    return  this.http.delete<Emp[]>(`https://67460ffe512ddbd807fab7d9.mockapi.io/ap/emp/Employees/${id}`)
  }

  getEmpDetails(id: number): Observable<Emp>{
    return this.http.get<Emp>(`https://67460ffe512ddbd807fab7d9.mockapi.io/ap/emp/Employees/${id}`)
  }

  editEmpDetails(Emp: any): Observable<any>{
    return this.http.put<any>(`https://67460ffe512ddbd807fab7d9.mockapi.io/ap/emp/Employees/${Emp.id}`,Emp)
  }
}
