import {Injectable} from '@angular/core';
import {ApiListResponse, ApiResponse} from "../models/api-response";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUsers(totalElements: number): Observable<ApiListResponse<User[]>> {
    const params = new HttpParams()
      .set('per_page', totalElements)
    return this.http.get<ApiListResponse<User[]>>(`${environment.apiUrl}/users`, {params});
  }

  getTotalElements(): Observable<number> {
    return this.http.get<ApiListResponse<User[]>>(`${environment.apiUrl}/users`).pipe(
      map((data: ApiListResponse<User[]>) => {
        return data.total;
      })
    );
  }

  getUser(id: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${environment.apiUrl}/users/${id}`);
  }
}
