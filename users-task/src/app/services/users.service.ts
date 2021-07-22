import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUser } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<any>("https://reqres.in/api/users").pipe(
      map((response) => {
        return response.data.map((res) => {
          return {
            ...res,
            FullName: `${res.first_name} ${res.last_name}`,
          };
        });
      })
    );
  }

  getIndividualUsers(id: string): Observable<IUser> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`).pipe(
      map((response) => {
        return response.data;
      }),
      map((response) => {
        return {
          ...response,
          FullName: `${response.first_name} ${response.last_name}`,
        };
      })
    );
  }
}
