import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map, Observable} from 'rxjs';
import {ApiResponse} from "../models/api-response";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {combineFirstNameAndLastNameToUser} from "../utils/mapNameUser";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.getUser(route?.params['id']).pipe(
      map((user: ApiResponse<User>) => this.mapToUser(user)),
      map((user: User) => combineFirstNameAndLastNameToUser(user))
    );
  }

  private mapToUser(user: ApiResponse<User>): User {
    return user.data;
  }
}
